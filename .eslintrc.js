module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react'],
  ecmaFeatures: { jsx: true },
  extends: ['plugin:prettier/recommended', 'prettier/react', 'prettier/@typescript-eslint', 'prettier'],
}
