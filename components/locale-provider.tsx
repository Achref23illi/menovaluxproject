'use client'

import React, { createContext, useContext, useMemo, useState } from 'react'
// Import the translations file and explicitly type it for stronger typings
import rawTranslations from '@/public/locales/translations.json'

const translations = rawTranslations as Record<'fr' | 'en', Record<string, string>>

// Extract the supported locales from the JSON structure
export type Locale = keyof typeof translations

interface LocaleContextValue {
  locale: Locale
  t: (key: string) => string
  setLocale: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: 'fr',
  // Fallback that returns the key itself if translation not found
  t: key => key,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLocale: () => {},
})

/**
 * LocaleProvider wraps the application and provides a simple translation\n * function `t` as well as the current locale and a method to change it.
 */
export function LocaleProvider({
  children,
  defaultLocale = 'fr',
}: {
  children: React.ReactNode
  defaultLocale?: Locale
}) {
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  const dictionary = translations[locale] || {}

  const t = (key: string) => dictionary[key] ?? key

  const value = useMemo(() => ({ locale, t, setLocale }), [locale, dictionary])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  return useContext(LocaleContext)
} 