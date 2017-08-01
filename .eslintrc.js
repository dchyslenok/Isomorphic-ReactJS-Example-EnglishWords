module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "settings": {
    "react": {
      "pragma": "React",
      "version": "15.0"
    }
  },
  "env": {
    "browser": true,
    "node": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "parser": "babel-eslint",
  "destructuring": "any",
  "rules": {
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "no-useless-constructor": 0,
    "react/jsx-filename-extension": 0,
    "require-yield": "error",
    "arrow-body-style": ["error", "as-needed"],
    "eol-last": 0,
    "react/forbid-prop-types": 0,
    "react/prefer-stateless-function": 0,
    "dot-notation": ["error", { "allowPattern": "^[a-z]+(_[a-z]+)+$" }],
    "camelcase": "error",
    "no-trailing-spaces": ["error", { "skipBlankLines": true }],
    "jsx-a11y/no-static-element-interactions": 0,
    "no-plusplus": 0,
    "no-return-assign": 0,
    "no-confusing-arrow": ["error", {"allowParens": false}],
    "object-shorthand": ["error", "always", { "ignoreConstructors": true }],
    "strict": [2, "global"],
    "import/prefer-default-export": "off"
  },
  "globals": {}
};
