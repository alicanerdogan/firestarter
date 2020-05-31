module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
  ],
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    module: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-unused-vars": ["error", { ignoreRestSiblings: true }],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-no-undef": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-cond-assign": ["error", "always"],
    "no-console": ["warn", { allow: ["warn", "error", "info"] }],
    "no-constant-condition": "warn",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "warn",
    "no-ex-assign": "error",
    "no-extra-semi": "error",
    "no-func-assign": "warn",
    "no-irregular-whitespace": "error",
    "no-unreachable": "warn",
    "valid-typeof": "error",
    eqeqeq: "error",
    "no-undef": "error",
    "constructor-super": "warn",
    "no-class-assign": "error",
    "no-const-assign": "error",
    "no-this-before-super": "warn",
    "no-var": "warn",
    "prefer-const": "error",
    "react/display-name": "off",
  },
  overrides: [
    {
      files: ["**/*.ts*"],
      parser: "@typescript-eslint/parser",
      rules: {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          { ignoreRestSiblings: true },
        ],
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-use-before-define": [
          "error",
          { functions: false, classes: true },
        ],
      },
    },
  ],
};
