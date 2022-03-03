import React from "react";
import { Layout } from "./components/Layout";
import { GlobalStyle } from "./styles/global";

function App(): JSX.Element {

  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  )
}

export { App };
