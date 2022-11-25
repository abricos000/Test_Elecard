module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'no-nested-ternary': 'off',
    'react/function-component-definition': 'off',
    'no-sequences': 'off',
    'linebreak-style': 'off',
    'no-param-reassign': 'off',
    'no-unused-expressions': 'off',
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/label-has-associated-control': ['error', {
      required: {
        some: ['nesting', 'id'],
      },
    }],

  },
};
