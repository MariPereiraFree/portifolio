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
      // 1. Single quotes for strings, except JSX attribute values
      'quotes': ['error', 'single', { avoidEscape: true }],
      // 2. Double quotes for JSX attribute string values
      'jsx-quotes': ['error', 'prefer-double'],
      // 3. Sorted imports (declarations) and named members, no semicolons
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'sort-imports': ['error', { ignoreDeclarationSort: true, ignoreCase: true }],
      'semi': ['error', 'never'],
      // 4. Max line length of 100
      'max-len': ['error', { code: 100, ignoreUrls: true, ignoreStrings: true }],
      // 5. Omit return keyword when function body only contains a return
      'arrow-body-style': ['error', 'as-needed'],
      // 6. React 17+ new JSX transform — no need to import React
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      // 7. 2-space indentation for JS/TS
      'indent': ['error', 2, { SwitchCase: 1 }],
      // 8. 2-space indentation for JSX, respecting tag hierarchy
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      // 9. No trailing spaces at the end of lines
      'no-trailing-spaces': 'error',
    },
  },
])
