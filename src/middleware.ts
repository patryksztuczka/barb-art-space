import createMiddleware from 'next-intl/middleware';

import { locales, defaultLocale } from './libs/i18n/config';

export default createMiddleware({
  locales,
  defaultLocale,
});

export const config = {
  matcher: ['/', '/(en)/:path*'],
};
