interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const MARIA_COLOR = '#5B6FF5'

export default function MariaLogo({ className = '', size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'text-3xl',
    md: 'text-5xl',
    lg: 'text-7xl',
  }

  return (
    <span className={`font-black tracking-tighter ${sizes[size]} ${className}`}>
      <span style={{ color: MARIA_COLOR }}>mar</span>
      <span style={{ color: MARIA_COLOR }}>IA</span>
      <span className="inline-block ml-1.5 align-baseline" style={{ color: MARIA_COLOR }}>
        <svg viewBox="0 0 20 20" fill="currentColor" className={`inline ${size === 'sm' ? 'w-3 h-3' : size === 'md' ? 'w-5 h-5' : 'w-7 h-7'} mb-1`}>
          <rect x="2" y="2" width="16" height="16" rx="2" />
        </svg>
      </span>
    </span>
  )
}

export { MARIA_COLOR }
