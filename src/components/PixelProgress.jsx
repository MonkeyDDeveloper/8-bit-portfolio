import { cn } from '@/lib/utils';

export function PixelProgress({ value = 0, max = 100, label, className, variant = 'default' }) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  
  const variants = {
    default: 'bg-retro-primary',
    secondary: 'bg-retro-secondary',
    accent: 'bg-retro-accent',
    warning: 'bg-retro-warning',
    danger: 'bg-retro-danger',
  };

  return (
    <div className={cn('w-full', className)}>
      {label && (
        <div className="flex justify-between mb-1">
          <span className="font-pixel text-[8px] uppercase">{label}</span>
          <span className="font-pixel text-[8px]">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className="h-4 bg-retro-darkgray border-2 border-current relative overflow-hidden">
        <div
          className={cn(
            'h-full transition-all duration-500',
            variants[variant]
          )}
          style={{ width: `${percentage}%` }}
        />
        {/* Pixel segments */}
        <div className="absolute inset-0 flex">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="flex-1 border-r border-retro-black/30 last:border-r-0"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
