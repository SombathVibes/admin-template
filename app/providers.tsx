"use client"

import { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from '@/context/theme-provider'
import { DirectionProvider } from '@/context/direction-provider'
import { FontProvider } from '@/context/font-provider'
import { LayoutProvider } from '@/context/layout-provider'
import { SearchProvider } from '@/context/search-provider'

export function Providers({ 
  children,
  defaultLayoutVariant,
  defaultLayoutCollapsible,
  defaultFont,
  defaultFontSize,
}: { 
  children: React.ReactNode 
  defaultLayoutVariant?: string
  defaultLayoutCollapsible?: string
  defaultFont?: string
  defaultFontSize?: string
}) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme='system' storageKey='admin-ui-theme'>
        <DirectionProvider>
          <FontProvider defaultFont={defaultFont as any} defaultFontSize={defaultFontSize as any}>
            <LayoutProvider 
              defaultVariant={defaultLayoutVariant as any} 
              defaultCollapsible={defaultLayoutCollapsible as any}
            >
              <SearchProvider>
                {children}
              </SearchProvider>
            </LayoutProvider>
          </FontProvider>
        </DirectionProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
