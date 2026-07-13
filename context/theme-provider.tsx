"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from "next-themes"

type NightShiftContextType = {
  isNightShiftEnabled: boolean
  toggleNightShift: (enabled: boolean) => void
  nightShiftIntensity: number
  setNightShiftIntensity: (intensity: number) => void
}

const NightShiftContext = React.createContext<NightShiftContextType | undefined>(undefined)

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [isNightShiftEnabled, setIsNightShiftEnabled] = React.useState(false)
  const [nightShiftIntensity, setNightShiftIntensityState] = React.useState(30)

  // Load initial state from localStorage
  React.useEffect(() => {
    const saved = localStorage.getItem('night-shift-enabled')
    if (saved) {
      setIsNightShiftEnabled(saved === 'true')
    }
    const savedIntensity = localStorage.getItem('night-shift-intensity')
    if (savedIntensity) {
      setNightShiftIntensityState(Number(savedIntensity))
    }
  }, [])

  const toggleNightShift = (enabled: boolean) => {
    setIsNightShiftEnabled(enabled)
    localStorage.setItem('night-shift-enabled', String(enabled))
    document.documentElement.style.setProperty(
      '--night-shift-opacity',
      enabled ? (nightShiftIntensity / 200).toFixed(2) : '0'
    )
  }

  const setNightShiftIntensity = (intensity: number) => {
    setNightShiftIntensityState(intensity)
    localStorage.setItem('night-shift-intensity', String(intensity))
    if (isNightShiftEnabled) {
      document.documentElement.style.setProperty(
        '--night-shift-opacity',
        (intensity / 200).toFixed(2)
      )
    }
  }

  // Pre-hydration script to prevent flash
  const scriptContent = `
    (function() {
      try {
        var enabled = localStorage.getItem('night-shift-enabled') === 'true';
        var intensity = localStorage.getItem('night-shift-intensity') || '30';
        var opacity = enabled ? (Number(intensity) / 200).toFixed(2) : '0';
        document.documentElement.style.setProperty('--night-shift-opacity', opacity);
      } catch (e) {}
    })();
  `

  return (
    <NextThemesProvider 
      attribute="class" 
      defaultTheme="system" 
      enableSystem 
      disableTransitionOnChange 
      {...props}
    >
      <NightShiftContext.Provider value={{ isNightShiftEnabled, toggleNightShift, nightShiftIntensity, setNightShiftIntensity }}>
        <script dangerouslySetInnerHTML={{ __html: scriptContent }} suppressHydrationWarning />
        {children}
        <div 
          className="pointer-events-none fixed inset-0 z-[99999] mix-blend-multiply transition-opacity duration-700 ease-in-out dark:mix-blend-color" 
          style={{ backgroundColor: 'rgba(251, 146, 60, var(--night-shift-opacity, 0))' }}
          aria-hidden="true" 
        />
      </NightShiftContext.Provider>
    </NextThemesProvider>
  )
}

export function useTheme() {
  const context = useNextTheme()

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return {
    ...context,
    defaultTheme: "system",
    resetTheme: () => context.setTheme("system"),
  }
}

export function useNightShift() {
  const context = React.useContext(NightShiftContext)
  if (context === undefined) {
    throw new Error('useNightShift must be used within a ThemeProvider')
  }
  return context
}
