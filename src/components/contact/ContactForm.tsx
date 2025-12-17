"use client";

import { useTranslations } from "next-intl";
import { Send, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const t = useTranslations("contact.form");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  // Reset success/error when user starts typing
  function clearFeedback() {
    if (success) setSuccess(null);
    if (error) setError(null);
  }

  // Clear specific field error
  function clearFieldError(field: keyof FormErrors) {
    if (formErrors[field]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  }

  // Validate email format
  function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validate phone format (optional but if filled, must be valid)
  function isValidPhone(phone: string): boolean {
    if (!phone) return true; // Optional field
    const phoneRegex = /^[\d\s\-+()]{8,}$/;
    return phoneRegex.test(phone);
  }

  // Validate form
function validateForm(formData: FormData): boolean {
  const errors: FormErrors = {};
  
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  // Name validation - no numbers allowed
  if (!name || name.trim().length === 0) {
    errors.name = t("fields.name.error");
  } else if (/\d/.test(name)) {
    errors.name = t("fields.name.errorNoNumbers");
  }

  // Email validation
  if (!email || !isValidEmail(email)) {
    errors.email = t("fields.email.error");
  }

  // Phone validation (only if filled)
  if (phone && !isValidPhone(phone)) {
    errors.phone = t("fields.phone.error");
  }

  // Message validation
  if (!message || message.trim().length === 0) {
    errors.message = t("fields.message.error");
  } else if (message.trim().length < 10) {
    errors.message = t("fields.message.errorMinLength");
  }

  setFormErrors(errors);
  return Object.keys(errors).length === 0;
}

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setError(null);
  setSuccess(null);

  const formElement = e.currentTarget; // Bewaar de referentie VOOR de async call
  const form = new FormData(formElement);

  // Validate before submitting
  if (!validateForm(form)) {
    return;
  }

  setLoading(true);

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      message: form.get("message"),
    }),
  });

  if (!res.ok) {
    setError(t("feedback.error"));
  } else {
    setSuccess(t("feedback.success"));
    formElement.reset(); // Gebruik de opgeslagen referentie
    setFormErrors({});
  }

  setLoading(false);
}


  return (
    <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
      {/* Success State */}
      {success ? (
        <div className="flex flex-col items-center justify-center gap-6 py-12">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#002855] mb-2">
              {success}
            </h3>
            <p className="text-slate-600">
              {t("feedback.successDescription")}
            </p>
          </div>
          <button
            onClick={() => setSuccess(null)}
            className="mt-4 text-[#005293] hover:text-[#003d73] font-semibold underline"
          >
            {t("feedback.sendAnother")}
          </button>
        </div>
      ) : (
        /* Formulier */
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FECC00]">
              <Send className="h-5 w-5 text-[#002855]" />
            </div>
            <h2 className="text-3xl font-bold text-[#002855]">{t("title")}</h2>
          </div>

          <p className="text-slate-600">{t("description")}</p>

          {/* Error message */}
          {error && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-red-100 text-red-700">
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
              <p className="font-medium">{error}</p>
            </div>
          )}

          {/* Form fields */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name field */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                {t("fields.name.label")}
              </label>
              <input
                name="name"
                onChange={() => {
                  clearFeedback();
                  clearFieldError("name");
                }}
                className={`w-full px-4 py-3 rounded-xl border shadow-sm focus:ring-2 focus:ring-[#005293] focus:border-[#005293] transition ${
                  formErrors.name
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-200"
                }`}
                placeholder={t("fields.name.placeholder")}
              />
              {formErrors.name && (
                <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {formErrors.name}
                </p>
              )}
            </div>

            {/* Email field */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                {t("fields.email.label")}
              </label>
              <input
                name="email"
                type="email"
                onChange={() => {
                  clearFeedback();
                  clearFieldError("email");
                }}
                className={`w-full px-4 py-3 rounded-xl border shadow-sm focus:ring-2 focus:ring-[#005293] focus:border-[#005293] transition ${
                  formErrors.email
                    ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                    : "border-gray-200"
                }`}
                placeholder={t("fields.email.placeholder")}
              />
              {formErrors.email && (
                <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {formErrors.email}
                </p>
              )}
            </div>
          </div>

          {/* Phone field */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              {t("fields.phone.label")}
            </label>
            <input
              name="phone"
              onChange={() => {
                clearFeedback();
                clearFieldError("phone");
              }}
              className={`w-full px-4 py-3 rounded-xl border shadow-sm focus:ring-2 focus:ring-[#005293] focus:border-[#005293] transition ${
                formErrors.phone
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-200"
              }`}
              placeholder={t("fields.phone.placeholder")}
            />
            {formErrors.phone && (
              <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {formErrors.phone}
              </p>
            )}
          </div>

          {/* Message field */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              {t("fields.message.label")}
            </label>
            <textarea
              name="message"
              rows={6}
              onChange={() => {
                clearFeedback();
                clearFieldError("message");
              }}
              className={`w-full px-4 py-3 rounded-xl border shadow-sm focus:ring-2 focus:ring-[#005293] focus:border-[#005293] resize-none transition ${
                formErrors.message
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-200"
              }`}
              placeholder={t("fields.message.placeholder")}
            ></textarea>
            {formErrors.message && (
              <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {formErrors.message}
              </p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="group mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-[#005293] px-8 py-4 font-semibold text-white shadow-lg hover:bg-[#003d73] transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? t("feedback.loading") : t("submit")}
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      )}
    </div>
  );
}