'use client';

import {NextIntlClientProvider} from 'next-intl';

export default function Providers({children, messages}: any) {
  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
