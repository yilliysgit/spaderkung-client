import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter, Playfair_Display } from "next/font/google";
import Header from '../../components/layout/header/Header';
import Footer from '../../components/layout/header/footer/Footer';
import { routing } from '@/i18n/routing';
import type { Metadata } from "next";
import "../globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: "Spaderkung Pizzeria - Östersunds Bästa Pizza",
  description: "Beställ äkta italiensk pizza online hos Spaderkung. Familjeägd pizzeria i Östersund sedan 2008.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // ✅ AWAIT params (Next.js 15 requirement)
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <div className="min-h-screen flex flex-col bg-gray-50">
            {/* Header on every page */}
            <Header />
            
            {/* Main content */}
            <main className="flex-1">
              {children}
            </main>
            
            {/* Footer on every page */}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}