declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "linaria" {
  // @ts-ignore
  export const css;
  // @ts-ignore
  export const cx;
}

declare module "linaria/react" {
  // @ts-ignore
  export const styled;
}
