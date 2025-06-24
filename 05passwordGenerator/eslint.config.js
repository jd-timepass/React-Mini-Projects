import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

const isProduction = process.env.NODE_ENV === 'production';

export default [
  { ignores: ['dist', 'node_modules'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      // Base ESLint recommended rules
      ...js.configs.recommended.rules,

      // React Hooks best practices
      ...reactHooks.configs.recommended.rules,

      // Refresh rule (not strict)
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Learner-friendly: just warn on unused vars
      'no-unused-vars': [
        isProduction ? 'error' : 'warn',
        { varsIgnorePattern: '^[A-Z_]', argsIgnorePattern: '^_' },
      ],

      // Optional: prevent accidental console.logs in prod
      'no-console': isProduction ? 'error' : 'off',

      // Optional: allow debugger during dev only
      'no-debugger': isProduction ? 'error' : 'off',
    },
  },
];
