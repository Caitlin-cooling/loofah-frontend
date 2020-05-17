module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    semi: ["warning", "always"],
    quotes: ["warning", "double"],
    "no-trailing-spaces": "error",
    "max-len": [1, 120],
    "no-case-declarations": "warn",
    "no-console": "error",
    "no-irregular-whitespace": "error",
    "no-unreachable": "warn",
    "no-unused-expressions": [1, { allowTernary: true }],
    "no-unused-vars": "error",
  },
};
