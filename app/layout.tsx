import type { Metadata } from 'next'
import { Inter, Manrope, Noto_Sans_Khmer } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'
import { cookies } from 'next/headers'
import { Providers } from './providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter-next' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope-next' })
const notoSansKhmer = Noto_Sans_Khmer({ subsets: ['khmer', 'latin'], variable: '--font-noto-sans-khmer-next' })

export const metadata: Metadata = {
  title: 'Admin Template',
  description: 'Admin Dashboard UI built with Shadcn and Next.js.',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const defaultLayoutVariant = cookieStore.get('layout_variant')?.value
  const defaultLayoutCollapsible = cookieStore.get('layout_collapsible')?.value
  const defaultFont = cookieStore.get('font')?.value || 'noto-sans-khmer'
  const defaultFontSize = cookieStore.get('font_size')?.value || 'base'

  let fontSizePixels = '16px'
  if (defaultFontSize === 'sm') fontSizePixels = '14px'
  else if (defaultFontSize === 'lg') fontSizePixels = '18px'

  return (
    <html lang='en' suppressHydrationWarning className={`${notoSansKhmer.variable} ${inter.variable} ${manrope.variable} font-${defaultFont}`} style={{ fontSize: fontSizePixels }}>
      <body className='antialiased'>
        <Providers 
          defaultLayoutVariant={defaultLayoutVariant} 
          defaultLayoutCollapsible={defaultLayoutCollapsible}
          defaultFont={defaultFont}
          defaultFontSize={defaultFontSize}
        >
          {children}
          <Toaster duration={5000} />
        </Providers>
      </body>
    </html>
  )
}
