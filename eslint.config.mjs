import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // design handoff (reference HTML + its prototyping runtime) and QA tooling are not app code
    "design_handoff_meerkat_scout_site/**",
    "qa/**",
    "tools/**",
  ]),
]);

export default eslintConfig;
