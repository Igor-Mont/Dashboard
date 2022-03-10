import React, { useContext } from "react";
import { ThemeContext, ThemeProvider, useTheme } from "styled-components";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Dashboard";
import { List } from "./pages/List";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";
import { ThemeSwitcherContext, ThemeSwitcherProvider } from './contexts/ThemeSwitcherContext';

function App(): JSX.Element {
  const { theme, toggleTheme } = useContext(ThemeSwitcherContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export { App };
