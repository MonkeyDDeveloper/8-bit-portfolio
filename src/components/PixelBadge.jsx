import { cn } from '@/lib/utils';

const variants = {
  default: 'bg-retro-primary/20 text-retro-primary border-retro-primary',
  secondary: 'bg-retro-secondary/20 text-retro-secondary border-retro-secondary',
  accent: 'bg-retro-accent/20 text-retro-accent border-retro-accent',
  warning: 'bg-retro-warning/20 text-retro-warning border-retro-warning',
  danger: 'bg-retro-danger/20 text-retro-danger border-retro-danger',
  ghost: 'bg-retro-gray/10 text-retro-gray border-retro-gray',
};

export function PixelBadge({ children, variant = 'default', className, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-1',
        'font-pixel text-[8px] uppercase tracking-wider',
        'border-2',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
