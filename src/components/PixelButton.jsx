import { cn } from '@/lib/utils';

const variants = {
  default: 'text-retro-primary border-retro-primary',
  secondary: 'text-retro-secondary border-retro-secondary',
  accent: 'text-retro-accent border-retro-accent',
  warning: 'text-retro-warning border-retro-warning',
  danger: 'text-retro-danger border-retro-danger',
  ghost: 'border-transparent shadow-none hover:border-current',
};

const sizes = {
  sm: 'text-[8px] px-2 py-1',
  md: 'text-[10px] px-4 py-2',
  lg: 'text-xs px-6 py-3',
};

export function PixelButton({
  children,
  variant = 'default',
  size = 'md',
  className,
  disabled,
  ...props
}) {
  return (
    <button
      className={cn(
        'font-pixel uppercase tracking-wider',
        'border-4 transition-all duration-100',
        'shadow-[4px_4px_0_0_currentColor]',
        'hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_currentColor]',
        'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
        'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0_0_currentColor]',
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
