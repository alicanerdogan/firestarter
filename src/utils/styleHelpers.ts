export const media = {
  sm: (css: TemplateStringsArray) => `@media (min-width: 576px) {
      ${css}
    }`,
  md: (css: TemplateStringsArray) => `@media (min-width: 768px) {
      ${css}
    }`,
  lg: (css: TemplateStringsArray) => `@media (min-width: 992px) {
      ${css}
    }`,
  xl: (css: TemplateStringsArray) => `@media (min-width: 1200px) {
      ${css}
    }`
};

export function whereHoverAvailable(css: TemplateStringsArray) {
  return `@media (hover: none) {
      ${css};
    }`;
}
