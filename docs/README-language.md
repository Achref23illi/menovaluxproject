# Implementing Language Support

This guide explains how to add multiple language support to the Menova Luxe website using Next.js.

## 1. Install Dependencies

Add `next-intl` to handle translations:

```bash
pnpm add next-intl
```

If you use `npm`, run:

```bash
npm install next-intl
```

## 2. Configure Next.js

Update `next.config.mjs` with the locales you want to support:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'fr'], // add more locales here
    defaultLocale: 'en'
  }
}

export default nextConfig
```

## 3. Create Translation Files

Store your translation JSON files inside `public/locales/{locale}`. For example:

```
public/locales/en/common.json
public/locales/fr/common.json
```

A sample `public/locales/en/common.json` file might look like:

```json
{
  "greeting": "Welcome"
}
```

And the French version `public/locales/fr/common.json`:

```json
{
  "greeting": "Bienvenue"
}
```

## 4. Use Translations in Components

Load messages with `next-intl` and render them in your components:

```tsx
import { useTranslations } from 'next-intl'

export default function HeroSection() {
  const t = useTranslations('common')
  return <h1>{t('greeting')}</h1>
}
```

## 5. Switching Languages

Link to a different locale by changing the pathname prefix. Example:

```tsx
import Link from 'next-intl/link'

<Link locale="fr" href="/">Français</Link>
```

This guide assumes a basic setup. Refer to the `next-intl` documentation for advanced usage.
