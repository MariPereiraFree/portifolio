import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import react from 'eslint-plugin-react'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'simple-import-sort': simpleImportSort,
      'react': react,
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'jsx-quotes': ['error', 'prefer-double'],
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'sort-imports': ['error', { ignoreDeclarationSort: true, ignoreCase: true }],
      'semi': ['error', 'never'],
      'max-len': ['error', { code: 100, ignoreUrls: true, ignoreStrings: true }],
      'arrow-body-style': ['error', 'as-needed'],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'indent': ['error', 2, { SwitchCase: 1 }],
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      'no-trailing-spaces': 'error',
    },
  },
])
