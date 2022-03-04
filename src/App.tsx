import React from "react";
import { ThemeProvider } from "styled-components";
import { Layout } from "./components/Layout";
import { GlobalStyle } from "./styles/global";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

function App(): JSX.Element {

  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Layout />
    </ThemeProvider>
  );
}

export { App };
