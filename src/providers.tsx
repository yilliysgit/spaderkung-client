'use client';

import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

type ProvidersProps = {
  children: ReactNode;
  messages: Record<string, any>;
};

export default function Providers({ children, messages }: ProvidersProps) {
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
