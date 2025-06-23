import type { Metadata } from 'next'
import './globals.css'
import { LocaleProvider } from '@/components/locale-provider'
import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
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
