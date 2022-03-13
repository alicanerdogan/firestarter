import * as React from "react";
import { styled, extend } from "utils/styles";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const HelloStyle = styled<{ isActive: boolean }>("h1")(
  `
  flex
  text-blue-500
  text-4xl
  `,
  (v) => [v?.isActive && "text-red-500"]
);

const NewTitle = extend<{ isActive: boolean; isDisabled: boolean }>(
  HelloStyle,
  "h2"
)(
  `
  text-yellow-800
  `,
  (v) => [v?.isDisabled && "text-5xl"]
);

export const Hello: React.FC<HelloProps> = () => {
  return (
    <>
      <HelloStyle variant={{ isActive: false }}>{"Hello Style"}</HelloStyle>
      <NewTitle variant={{ isActive: false }}>{"New Title"}</NewTitle>
    </>
  );
};

Hello.displayName = "Hello";
