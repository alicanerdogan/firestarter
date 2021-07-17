declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}

declare module '*.jpg' {
  const ref: string;
  export default ref;
}

declare module '*.jpeg' {
  const ref: string;
  export default ref;
}

declare module '*.png' {
  const ref: string;
  export default ref;
}
