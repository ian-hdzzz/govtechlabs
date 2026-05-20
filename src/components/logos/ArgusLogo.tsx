interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const ARGUS_COLOR = '#1e5c3a'
const ARGUS_ACCENT = '#4ade80'

export default function ArgusLogo({ className = '', size = 'md' }: LogoProps) {
  const textSizes = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl',
  }
  const paddings = {
    sm: 'px-3 py-1',
    md: 'px-5 py-2',
    lg: 'px-6 py-3',
  }
  const iconSizes = {
    sm: 12,
    md: 18,
    lg: 26,
  }

  return (
    <div className={`inline-block bg-white rounded-2xl ${paddings[size]} ${className}`}>
      <span className={`font-black tracking-tighter ${textSizes[size]} flex items-center gap-1`}>
        <span style={{ color: ARGUS_COLOR }}>argus</span>
        <span className="inline-block align-baseline" style={{ color: ARGUS_COLOR }}>
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            style={{ width: iconSizes[size], height: iconSizes[size], display: 'inline', marginBottom: 2 }}
          >
            <circle cx="10" cy="10" r="7" />
            <circle cx="10" cy="10" r="2.5" fill="currentColor" stroke="none" />
            <line x1="10" y1="1" x2="10" y2="5" />
            <line x1="10" y1="15" x2="10" y2="19" />
            <line x1="1" y1="10" x2="5" y2="10" />
            <line x1="15" y1="10" x2="19" y2="10" />
          </svg>
        </span>
      </span>
    </div>
  )
}

export { ARGUS_COLOR, ARGUS_ACCENT }
