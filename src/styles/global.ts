import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  html, border-style, #root {
    height: 100%;
  }

  *, button, input {
    outline: 0;
    border: 0;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export { GlobalStyle };