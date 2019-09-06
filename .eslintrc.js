module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "emotion"
  ],
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "@typescript-eslint/explicit-member-accessibility": ["error", { accessibility: "no-public" }],
    "emotion/jsx-import": "off",
    "emotion/no-vanilla": "error",
    "emotion/import-from-emotion": "error",
    "emotion/styled-import": "error"
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-function-return-type": "off"
      },
    }
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
