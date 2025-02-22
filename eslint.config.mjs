import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { readFileSync } from "fs";
import path from "path";

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load tsconfig.json
const tsconfigPath = path.resolve(__dirname, "./tsconfig.json");
const tsconfig = JSON.parse(readFileSync(tsconfigPath, "utf-8"));

const { recommended } = prettierConfig;

const normalizeGlobals = (globals = {}) =>
  Object.fromEntries(
    Object.entries(globals).map(([key, value]) => [
      key,
      value === true ? "readonly" : value === false ? "off" : value,
    ])
  );

export default [
  {
    // Ignore patterns
    ignores: ["dist/", "eslint.config.mjs", "src/__tests__", "jest.config.js"], // Ignore eslint.config.mjs explicitly
  },
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      sourceType: "module",
      parser: tsParser,
      parserOptions: {
        project: tsconfigPath,
        tsconfigRootDir: __dirname,
        ecmaVersion: tsconfig.compilerOptions?.target || 2020,
      },
      globals: {
        ...normalizeGlobals(globals.node),
        URL: "readonly", // Explicitly add URL global
        module: "readonly",
        require: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      prettier,
    },
    rules: {
      ...(recommended ? recommended.rules : {}),
      ...tseslint.configs.recommended.rules,
      "@typescript-eslint/no-require-imports": "off",
      "prettier/prettier": "warn", 

      "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
          allowExpressions: false,
          allowTypedFunctionExpressions: false,
          allowHigherOrderFunctions: false,
          allowDirectConstAssertionInArrowFunctions: false,
        },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        { selector: "default", format: ["camelCase"] },
        { selector: "variable", format: ["camelCase", "UPPER_CASE"] },
        { selector: "function", format: ["camelCase"] },
        {
          selector: "parameter",
          format: ["camelCase"],
          leadingUnderscore: "allow",
        },
        { selector: "property", format: ["camelCase", "snake_case"] },
        { selector: "class", format: ["PascalCase"] },
        { selector: "interface", format: ["PascalCase"], prefix: ["I"] },
        { selector: "typeAlias", format: ["PascalCase"] },
        { selector: "enum", format: ["PascalCase"] },
        { selector: "enumMember", format: ["UPPER_CASE"] },
      ],
    },
  },
  pluginJs.configs.recommended,
];
