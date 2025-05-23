import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.browser,
    },
    extends: ["js/recommended", "plugin:prettier/recommended"],
  },
]);
