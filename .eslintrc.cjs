module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true, // Si vous utilisez Node.js dans votre projet
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended", // Ajoutez cette ligne
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser", // Utilisez le parser TypeScript
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true, // Permet de parser JSX
    },
  },
  settings: {
    react: {
      version: "detect", // Détecte automatiquement la version de React
    },
  },
  plugins: [
    "react-refresh",
    "@typescript-eslint", // Ajoutez ce plugin
  ],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { varsIgnorePattern: "React" },
    ],
  },
};
