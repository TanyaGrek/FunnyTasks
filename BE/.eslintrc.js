module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'unicorn', 'import'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  rules: {
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
        },
      },
    ],
  },
};
