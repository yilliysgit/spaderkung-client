"use client";

import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactHours from "@/components/contact/ContactHours";
import ContactMap from "@/components/contact/ContactMap";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <ContactHero />

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-6 grid gap-12 lg:grid-cols-3">
          <ContactForm />
          <ContactHours />
        </div>
        <ContactMap />
      </section>
    </main>
  );
}