import { useState, useEffect, useCallback } from 'react'
import { Sun, Moon, Monitor } from 'lucide-react'

type Theme = 'light' | 'dark' | 'system'

function getSystemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('praisly-theme') as Theme | null
    return saved || 'system'
  })

  const resolved = theme === 'system' ? getSystemTheme() : theme

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t)
    localStorage.setItem('praisly-theme', t)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(resolved)
  }, [resolved])

  useEffect(() => {
    if (theme !== 'system') return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = () => setThemeState('system') // triggers re-render
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [theme])

  return { theme, resolved, setTheme }
}

export function ThemeToggle({
  theme,
  setTheme,
  className = '',
  variant = 'default',
}: {
  theme: Theme
  setTheme: (t: Theme) => void
  className?: string
  variant?: 'default' | 'pulse'
}) {
  const modes: Theme[] = ['light', 'dark', 'system']
  const icons = { light: Sun, dark: Moon, system: Monitor }

  if (variant === 'pulse') {
    return (
      <div className={`flex gap-1 ${className}`}>
        {modes.map((m) => {
          const Icon = icons[m]
          const active = theme === m
          return (
            <button
              key={m}
              onClick={() => setTheme(m)}
              className={`p-2 rounded-md transition-colors ${
                active
                  ? 'text-[#00FF88] bg-[#00FF88]/10'
                  : 'text-[#666] hover:text-white'
              }`}
            >
              <Icon size={16} strokeWidth={1.5} />
            </button>
          )
        })}
      </div>
    )
  }

  return (
    <div className={`flex gap-1 ${className}`}>
      {modes.map((m) => {
        const Icon = icons[m]
        const active = theme === m
        return (
          <button
            key={m}
            onClick={() => setTheme(m)}
            className={`p-2 transition-colors ${
              active
                ? 'text-current opacity-100'
                : 'text-current opacity-30 hover:opacity-60'
            }`}
          >
            <Icon size={16} strokeWidth={1.5} />
          </button>
        )
      })}
    </div>
  )
}
