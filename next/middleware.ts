import createIntlMiddleware from 'next-intl/middleware'

export default createIntlMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'uk', 'ru'],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'en',
})

export const config = {
  // Skip all paths that aren't pages that you'd like to internationalize
  // TODO: learn more about path patter matching
  matcher: [
    '/((?!api|_next|assets|favicon|emoji|apple-touch-icon|android-chrome).*)',
  ],
}
