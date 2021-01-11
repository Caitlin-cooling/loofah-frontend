module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "semi": ["warn", "always"],
      "quotes": ["warn", "double"],
      "no-trailing-spaces": "warn",
      "comma-dangle": "warn",
      "max-len": [1, 120],
      "no-case-declarations": "warn",
      "no-console": "warn",
      "no-irregular-whitespace": "warn",
      "no-unreachable": "warn",
      "no-unused-expressions": [1, { "allowTernary": true }],
      "no-unused-vars": "warn",
    }
};