import * as React from "react";
import { createGlobalStyle, css } from "styled-components";

// USE DESIRED FONT
const Global = createGlobalStyle`
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

export const GlobalStyles: React.SFC<{
  children: React.ReactNode;
}> = (props: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Global />
      {props.children}
    </React.Fragment>
  );
};

type CSSArgs = Parameters<typeof css>;

export const media = {
  sm: (...args: CSSArgs) => css`
    @media (max-width: 576px) {
      ${css(...args)};
    }
  `,
  md: (...args: CSSArgs) => css`
    @media (max-width: 768px) {
      ${css(...args)};
    }
  `,
  lg: (...args: CSSArgs) => css`
    @media (max-width: 992px) {
      ${css(...args)};
    }
  `,
  xl: (...args: CSSArgs) => css`
    @media (max-width: 1200px) {
      ${css(...args)};
    }
  `
};

export const whereHoverAvailable = (...args: CSSArgs) => css`
  @media (hover: none) {
    ${css(...args)};
  }
`;
