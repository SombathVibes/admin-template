"use client"

import { createContext, useContext, useEffect, useState } from 'react'
import { fonts, fontSizes, FontSize } from '@/config/fonts'
import { getCookie, setCookie, removeCookie } from '@/lib/cookies'

type Font = (typeof fonts)[number]

const FONT_COOKIE_NAME = 'font'
const FONT_SIZE_COOKIE_NAME = 'font_size'
const FONT_COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year

type FontContextType = {
  font: Font
  setFont: (font: Font) => void
  fontSize: FontSize
  setFontSize: (size: FontSize) => void
  resetFont: () => void
}

const FontContext = createContext<FontContextType | null>(null)

export function FontProvider({ 
  children, 
  defaultFont,
  defaultFontSize = 'base'
}: { 
  children: React.ReactNode
  defaultFont?: Font
  defaultFontSize?: FontSize
}) {
  const [font, _setFont] = useState<Font>(() => {
    const savedFont = getCookie(FONT_COOKIE_NAME) || defaultFont
    return fonts.includes(savedFont as Font) ? (savedFont as Font) : fonts[0]
  })

  const [fontSize, _setFontSize] = useState<FontSize>(() => {
    const savedSize = getCookie(FONT_SIZE_COOKIE_NAME) || defaultFontSize
    return fontSizes.includes(savedSize as FontSize) ? (savedSize as FontSize) : 'base'
  })

  useEffect(() => {
    const applyFont = (font: string, size: string) => {
      const root = document.documentElement
      const classesToRemove = Array.from(root.classList).filter(
        (cls) => cls.startsWith('font-') && !['font-normal', 'font-medium', 'font-semibold', 'font-bold'].includes(cls)
      )
      classesToRemove.forEach((cls) => root.classList.remove(cls))
      root.classList.add(`font-${font}`)
      
      if (size === 'sm') root.style.fontSize = '14px'
      else if (size === 'lg') root.style.fontSize = '18px'
      else root.style.fontSize = '16px' // base
    }

    applyFont(font, fontSize)
  }, [font, fontSize])

  const setFont = (font: Font) => {
    setCookie(FONT_COOKIE_NAME, font, FONT_COOKIE_MAX_AGE)
    _setFont(font)
  }

  const setFontSize = (size: FontSize) => {
    setCookie(FONT_SIZE_COOKIE_NAME, size, FONT_COOKIE_MAX_AGE)
    _setFontSize(size)
  }

  const resetFont = () => {
    removeCookie(FONT_COOKIE_NAME)
    removeCookie(FONT_SIZE_COOKIE_NAME)
    _setFont(fonts[0])
    _setFontSize('base')
  }

  return (
    <FontContext value={{ font, setFont, fontSize, setFontSize, resetFont }}>{children}</FontContext>
  )
}

export const useFont = () => {
  const context = useContext(FontContext)
  if (!context) {
    throw new Error('useFont must be used within a FontProvider')
  }
  return context
}
