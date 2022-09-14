const ROOT_EXTENDS = ['react-app', 'prettier', 'plugin:prettier/recommended'];

const DISABLE_PRETTIER_RULE = {
  'prettier/prettier': 'off',
};

module.exports = {
  root: true,
  extends: ROOT_EXTENDS,
  rules: DISABLE_PRETTIER_RULE,
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: [
        ...ROOT_EXTENDS,
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      rules: {
        // these all default to "error"; set them to "warn" or "off" because there are too many to deal with
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/restrict-plus-operands': 'warn',
        '@typescript-eslint/restrict-template-expressions': 'warn',
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/require-await': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        ...DISABLE_PRETTIER_RULE,
      },
    },
  ],
};
