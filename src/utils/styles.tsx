import * as React from "react";
import { css } from "linaria";

// USE DESIRED FONT
export const globalStyles = css`
  :global() {
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
  }
`;

export const GlobalStyles: React.FC<{
  children: React.ReactElement;
}> = (props: { children: React.ReactElement }) => {
  return props.children;
};
