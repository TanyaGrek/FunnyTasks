module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {},
  overrides: [
    {
      files: ['*.test.js'],
      rules: {
        'no-unused-expressions': 'off',
        'import/prefer-default-export': 'off',
      },
    },
  ],
};
