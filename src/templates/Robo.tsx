import { PraislyLogo } from '../components/PraislyLogo'
import { ThemeToggle, useTheme } from '../components/ThemeToggle'
import { MiniSparkline } from '../components/MiniSparkline'
import { InteractiveRobotSpline } from '../components/InteractiveRobotSpline'
import { Bot, Cpu, Zap, Activity } from 'lucide-react'
import {
  metrics,
  sparkRevenue, sparkClients, sparkAppointments, sparkRating,
} from '../lib/data'

const SPLINE_SCENE = 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode'

const navItems = [
  { label: 'Overview', icon: Bot },
  { label: 'Systems', icon: Cpu },
  { label: 'Energy', icon: Zap },
  { label: 'Vitals', icon: Activity },
]

export default function Robo() {
  const { theme, resolved, setTheme } = useTheme()
  const bg = resolved === 'dark' ? '#000' : '#FFF'
  const fg = resolved === 'dark' ? '#FFF' : '#000'
  const muted = resolved === 'dark' ? '#555' : '#AAA'
  const rule = resolved === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'
  const glassBg = resolved === 'dark'
    ? 'rgba(0,0,0,0.7)'
    : 'rgba(255,255,255,0.7)'
  const glassBorder = resolved === 'dark'
    ? 'rgba(255,255,255,0.1)'
    : 'rgba(0,0,0,0.1)'

  return (
    <div style={{ background: bg, color: fg, height: '100vh', fontFamily: "'Plus Jakarta Sans', sans-serif", display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative' }}>
      {/* Compact top bar */}
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          height: 48,
          borderBottom: `1px solid ${rule}`,
          flexShrink: 0,
          position: 'relative',
          zIndex: 10,
          background: bg,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <PraislyLogo color={fg} size={16} />
        </div>
        <nav style={{ display: 'flex', gap: 20 }}>
          {navItems.map((item, i) => {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href="#"
                style={{
                  fontSize: 12,
                  fontWeight: i === 0 ? 600 : 400,
                  color: i === 0 ? fg : muted,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                }}
              >
                <Icon size={13} strokeWidth={1.5} />
                {item.label}
              </a>
            )
          })}
        </nav>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </header>

      {/* Robot hero area */}
      <div style={{ flex: 1, position: 'relative' }}>
        <InteractiveRobotSpline
          scene={SPLINE_SCENE}
          className="w-full h-full"
        />

        {/* Floating metrics bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 24,
            left: 24,
            right: 24,
            display: 'flex',
            gap: 0,
            background: glassBg,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: `1px solid ${glassBorder}`,
            borderRadius: '0.75rem',
            overflow: 'hidden',
            zIndex: 10,
          }}
        >
          {[
            { value: `$${metrics.todayRevenue.toLocaleString()}`, label: 'REVENUE', spark: sparkRevenue },
            { value: metrics.appointmentsToday.toString(), label: 'APPOINTMENTS', spark: sparkAppointments },
            { value: metrics.newClientsMonth.toString(), label: 'CLIENTS', spark: sparkClients },
            { value: metrics.avgRating.toFixed(1), label: 'RATING', spark: sparkRating },
          ].map((m, i) => (
            <div
              key={m.label}
              style={{
                flex: 1,
                padding: '16px 20px',
                borderRight: i < 3 ? `1px solid ${glassBorder}` : 'none',
              }}
            >
              <div style={{
                fontSize: 22,
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: -0.5,
                marginBottom: 4,
                fontFamily: "'JetBrains Mono', monospace",
              }}>
                {m.value}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 9, fontWeight: 500, letterSpacing: 2, color: muted }}>
                  {m.label}
                </span>
                <MiniSparkline data={m.spark} color={muted} height={18} width={56} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
