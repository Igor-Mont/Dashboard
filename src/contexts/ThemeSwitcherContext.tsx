import { createContext, ReactNode, useState } from 'react';
import dark from '../styles/themes/dark'
import light from '../styles/themes/light'
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { usePersistedState } from '../hooks/usePersistedState';

type ThemeSwitcherProps = {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

type ProviderProps = {
  children: ReactNode;
}

const ThemeSwitcherContext = createContext({} as ThemeSwitcherProps);

function ThemeSwitcherProvider({ children }: ProviderProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme',dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeSwitcherContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeSwitcherContext.Provider>
  );
}

export { ThemeSwitcherProvider, ThemeSwitcherContext };