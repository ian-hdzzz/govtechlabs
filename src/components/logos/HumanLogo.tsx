interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function HumanLogo({ className = '', size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl',
  }

  return (
    <div className={`flex flex-col leading-[1.1] ${className}`}>
      <span className={`font-black ${sizes[size]}`} style={{ color: '#8B8B00' }}>
        human
      </span>
      <span className={`font-black ${sizes[size]}`} style={{ color: '#8B8B00' }}>
        software
      </span>
      <span className={`font-black ${sizes[size]}`} style={{ color: '#8B8B00' }}>
        corporation
      </span>
      <span className={`font-medium italic ${size === 'lg' ? 'text-sm' : 'text-xs'} self-end`} style={{ color: '#8B8B00' }}>
        ai solutions
      </span>
    </div>
  )
}
