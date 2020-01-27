import * as React from "react";
import styled, { createGlobalStyle, css } from "styled-components";
import { extendStyled, extendCss, getGlobalStyles } from "tailwind-in-js";

export const twStyled = extendStyled(styled);
export const twCss = extendCss(css);

// USE DESIRED FONT
const Global = createGlobalStyle`
  ${getGlobalStyles()}
 
  * {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;

    -webkit-tap-highlight-color: transparent;
  }

  html {
    max-height: 100%;
  }

  * {
    font-family: "Roboto Condensed", sans-serif;
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
