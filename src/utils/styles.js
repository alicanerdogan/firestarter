import * as React from "react";
import { Global, css } from "@emotion/core";

// USE DESIRED FONT
const globalStyles = css`
  @import url("https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700&subset=latin-ext");

  * {
    box-sizing: border-box;

    user-select: none;
    outline: none;

    &:focus {
      outline: none;
      box-shadow: none;
    }

    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;

    -webkit-tap-highlight-color: transparent;
  }

  html {
    max-height: 100%;
  }

  body {
    font-family: "Roboto Condensed", sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    text-align: left;
    margin: 0;
  }

  button {
    font-family: "Roboto Condensed", sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
`;

export const GlobalStyles = props => {
  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      {props.children}
    </React.Fragment>
  );
};

export const media = {
  sm: (...args) => css`
    @media (max-width: 576px) {
      ${css(...args)};
    }
  `,
  md: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)};
    }
  `,
  lg: (...args) => css`
    @media (max-width: 992px) {
      ${css(...args)};
    }
  `,
  xl: (...args) => css`
    @media (max-width: 1200px) {
      ${css(...args)};
    }
  `
};

export const whereHoverAvailable = (...args) => css`
  @media (hover: none) {
    ${css(...args)};
  }
`;
