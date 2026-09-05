'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export type Palette = 'navy' | 'sage' | 'mono' | 'maroon';
export type ThemeMode = 'light' | 'dark';

export type Theme = {
  palette: Palette;
  mode: ThemeMode;
};

type ThemeContextValue = {
  theme: Theme;
  setPalette: (palette: Palette) => void;
  setMode: (mode: ThemeMode) => void;
};

const STORAGE_KEY = 'hb-theme';
const defaultTheme: Theme = { palette: 'sage', mode: 'light' };

const paletteNames: Palette[] = ['navy', 'sage', 'mono', 'maroon'];

function parseTheme(value: string | null): Theme {
  const [palette, mode] = value?.split(':') ?? [];

  if (
    paletteNames.includes(palette as Palette) &&
    (mode === 'light' || mode === 'dark')
  ) {
    return { palette: palette as Palette, mode };
  }

  return defaultTheme;
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.palette = theme.palette;
  root.classList.toggle('dark', theme.palette !== 'sage' && theme.mode === 'dark');
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const storedTheme = parseTheme(window.localStorage.getItem(STORAGE_KEY));
    setTheme(storedTheme);
    applyTheme(storedTheme);
  }, []);

  const updateTheme = (nextTheme: Theme) => {
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem(
      STORAGE_KEY,
      `${nextTheme.palette}:${nextTheme.mode}`
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setPalette: (palette) => updateTheme({ ...theme, palette }),
        setMode: (mode) => updateTheme({ ...theme, mode }),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
}