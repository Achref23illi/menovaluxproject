import type { Metadata } from 'next'
import './globals.css'
import { LocaleProvider } from '@/components/locale-provider'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.menovalux.ca'), // TODO: update with production URL
  title: {
    default: 'Menovalux',
    template: '%s | Menovalux',
  },
  description: "Entreprise de rénovation générale à Montréal, spécialisée dans la transformation d'espaces résidentiels et commerciaux : cuisines, salles de bain, bureaux, revêtements de sol, solutions techniques et finitions haut de gamme.",
  keywords: [
    'menuiserie',
    'aluminium',
    'pvc',
    'fenêtres',
    'portes',
    'Montréal',
    'Québec',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Menovalux',
    description: 'Entreprise de menuiserie aluminium et PVC à Montréal, Québec.',
    url: 'https://www.menovalux.ca',
    siteName: 'Menovalux',
    locale: 'fr_CA',
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Menovalux logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Menovalux',
    description: 'Entreprise de menuiserie aluminium et PVC à Montréal, Québec.',
    images: ['/images/logo.png'],
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  generator: 'Next.js 15',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
