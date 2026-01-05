import { cn } from '@/lib/utils';

export function PixelCard({ children, className, variant = 'default', ...props }) {
  const variants = {
    default: 'border-retro-primary text-retro-primary',
    secondary: 'border-retro-secondary text-retro-secondary',
    accent: 'border-retro-accent text-retro-accent',
    warning: 'border-retro-warning text-retro-warning',
    ghost: 'border-retro-gray/50 text-retro-gray',
  };

  return (
    <div
      className={cn(
        'p-4 border-4',
        'shadow-[8px_8px_0_0_currentColor]',
        'bg-gradient-to-br from-white/5 to-transparent',
        'transition-all duration-200',
        'hover:shadow-[12px_12px_0_0_currentColor] hover:-translate-x-1 hover:-translate-y-1',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function PixelCardHeader({ children, className, ...props }) {
  return (
    <div
      className={cn('pb-2 mb-4 border-b-2 border-current/30', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function PixelCardTitle({ children, className, ...props }) {
  return (
    <h3
      className={cn('font-pixel text-sm uppercase tracking-wider', className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function PixelCardContent({ children, className, ...props }) {
  return (
    <div className={cn('font-mono text-sm', className)} {...props}>
      {children}
    </div>
  );
}
