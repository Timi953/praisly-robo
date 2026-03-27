// Praisly Hair logo — recreated from the brand PDF
// The "P" has a distinctive double-loop organic shape

export function PraislyLogo({ className = '', color = 'currentColor', size = 24 }: { className?: string; color?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size * 4.5}
      height={size}
      viewBox="0 0 180 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Custom P with double-loop */}
      <path
        d="M8 32V18c0-6 4-10 10-10 5 0 8 3 8 7s-3 6-7 6h-3c-4 0-7 3-7 7v4"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="22" cy="12" r="3" fill={color} />
      {/* raisly text */}
      <text
        x="38"
        y="28"
        fontFamily="'Plus Jakarta Sans', sans-serif"
        fontWeight="600"
        fontSize="22"
        fill={color}
        letterSpacing="-0.5"
      >
        raisly
      </text>
    </svg>
  )
}

export function PraislyLogoFull({ className = '', color = 'currentColor', size = 24 }: { className?: string; color?: string; size?: number }) {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <PraislyLogo color={color} size={size} />
      <span
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: size * 0.35,
          letterSpacing: size * 0.2,
          fontWeight: 400,
          color,
          marginTop: size * -0.1,
          paddingLeft: 2,
          textTransform: 'uppercase',
        }}
      >
        HAIR
      </span>
    </div>
  )
}
