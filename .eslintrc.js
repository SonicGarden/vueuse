module.exports = {
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/vue',
  ],
  env: {
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      },
    },
    // eslint-import-resolver-typescript
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  rules: {
    // NOTE: Disallow async functions which have no await expression
    'require-await': 'warn',

    // NOTE: 競合するルール調整
    // SEE: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': ['error'],

    // SEE: https://engineering.linecorp.com/ja/blog/you-dont-need-default-export/
    'import/prefer-default-export': 'off',

    'import/extensions': [
      'error',
      'always',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],

    // prettier
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSpacing: true,
        printWidth: 100,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        useTabs: false,
      },
    ],

    // NOTE: typescript-eslintと競合するルールを無効化
    // SEE: https://github.com/vuejs/eslint-config-typescript/blob/master/index.js
    'no-undef': 'off',
    'no-unused-vars': 'off',
    strict: 'off',
  },
};
