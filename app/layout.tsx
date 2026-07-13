import type { Metadata } from 'next'
import { Noto_Sans_Khmer, Battambang, Kantumruy_Pro, Suwannaphum } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import { cookies } from 'next/headers'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getLocale } from 'next-intl/server'
import { Providers } from './providers'
import './globals.css'

const notoSansKhmer = Noto_Sans_Khmer({ weight: ['400', '500', '600', '700', '800'], subsets: ['khmer', 'latin'], variable: '--font-noto-sans-khmer-next' })
const battambang = Battambang({ weight: ['100', '300', '400', '700', '900'], subsets: ['khmer', 'latin'], variable: '--font-battambang-next' })
const kantumruyPro = Kantumruy_Pro({ subsets: ['khmer', 'latin'], variable: '--font-kantumruy-pro-next' })
const suwannaphum = Suwannaphum({ weight: ['100', '300', '400', '700', '900'], subsets: ['khmer', 'latin'], variable: '--font-suwannaphum-next' })

export const metadata: Metadata = {
  title: 'Admin Template',
  description: 'Admin Dashboard UI built with Shadcn and Next.js.',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  const messages = await getMessages()
  const cookieStore = await cookies()
  const defaultLayoutVariant = cookieStore.get('layout_variant')?.value
  const defaultLayoutCollapsible = cookieStore.get('layout_collapsible')?.value
  const defaultFont = cookieStore.get('font')?.value || 'noto-sans-khmer'
  const defaultFontSize = cookieStore.get('font_size')?.value || 'base'

  let fontSizePixels = '16px'
  if (defaultFontSize === 'sm') fontSizePixels = '14px'
  else if (defaultFontSize === 'lg') fontSizePixels = '18px'

  const fontClasses: Record<string, string> = {
    'suwannaphum': 'font-suwannaphum',
    'kantumruy-pro': 'font-kantumruy-pro',
    'battambang': 'font-battambang',
    'noto-sans-khmer': 'font-noto-sans-khmer',
  }
  const appliedFontClass = fontClasses[defaultFont] || 'font-noto-sans-khmer'

  return (
    <html lang={locale} suppressHydrationWarning className={`${suwannaphum.variable} ${kantumruyPro.variable} ${battambang.variable} ${notoSansKhmer.variable} ${appliedFontClass}`} style={{ fontSize: fontSizePixels }}>
      <body className='antialiased'>
        <NextIntlClientProvider messages={messages} locale={locale}>
        <Providers 
          defaultLayoutVariant={defaultLayoutVariant} 
          defaultLayoutCollapsible={defaultLayoutCollapsible}
          defaultFont={defaultFont}
          defaultFontSize={defaultFontSize}
        >
          {children}
          <Toaster duration={5000} />
        </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
