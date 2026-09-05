'use client';

import { Moon, Palette as PaletteIcon, Sun, Check } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { Palette, useTheme } from './ThemeProvider';

const palettes: { id: Palette; name: string; swatch: string }[] = [
  { id: 'navy', name: 'Navy & Gold', swatch: 'bg-[hsl(210_55%_18%)]' },
  { id: 'sage', name: 'Sage', swatch: 'bg-[hsl(36_38%_62%)]' },
  { id: 'mono', name: 'Monochrome', swatch: 'bg-[hsl(0_0%_4%)]' },
  { id: 'maroon', name: 'Maroon & Cream', swatch: 'bg-[hsl(0_45%_22%)]' },
];

export function ThemeSwitcher() {
  const { theme, setPalette, setMode } = useTheme();

  return (
    <div className="fixed bottom-24 right-6 z-50 sm:bottom-6">
      <Popover>
        <PopoverTrigger asChild>
          <button
            type="button"
            aria-label="Customize theme"
            title="Customize theme"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <PaletteIcon className="h-5 w-5" />
          </button>
        </PopoverTrigger>
        <PopoverContent align="end" side="top" sideOffset={12} className="w-[calc(100vw-3rem)] max-w-64">
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold">Theme</p>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {palettes.map((palette) => {
                  const active = theme.palette === palette.id;

                  return (
                    <button
                      key={palette.id}
                      type="button"
                      aria-label={`Use ${palette.name} palette`}
                      title={palette.name}
                      onClick={() => setPalette(palette.id)}
                      className={cn(
                        'relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                        active && 'border-foreground'
                      )}
                    >
                      <span className={cn('h-7 w-7 rounded-full border border-black/10', palette.swatch)} />
                      {active && <Check className="absolute h-4 w-4 text-white drop-shadow" />}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-border pt-4">
              <div className="flex items-center gap-2 text-sm font-medium">
                {theme.mode === 'dark' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                <span>{theme.mode === 'dark' ? 'Dark' : 'Light'}</span>
              </div>
              <Switch
                aria-label="Toggle dark mode"
                checked={theme.mode === 'dark'}
                onCheckedChange={(checked) => setMode(checked ? 'dark' : 'light')}
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}