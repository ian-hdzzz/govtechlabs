interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const AGORA_COLOR = '#D94F2B'

export default function AgoraLogo({ className = '', size = 'md' }: LogoProps) {
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
  const dotSizes = {
    sm: 'w-2 h-2',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  }

  return (
    <div className={`inline-block bg-white rounded-2xl ${paddings[size]} ${className}`}>
      <span className={`font-black tracking-tighter ${textSizes[size]}`}>
        <span style={{ color: AGORA_COLOR }}>ágora</span>
        <span className="inline-block ml-1 align-baseline" style={{ color: AGORA_COLOR }}>
          <svg viewBox="0 0 20 20" fill="currentColor" className={`inline ${dotSizes[size]} mb-1`}>
            <rect x="2" y="2" width="16" height="16" rx="2" />
          </svg>
        </span>
      </span>
    </div>
  )
}

export { AGORA_COLOR }
