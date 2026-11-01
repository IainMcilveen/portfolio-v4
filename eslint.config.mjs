// @ts-check
import prettier from "eslint-config-prettier/flat";
import withNuxt from "./.nuxt/eslint.config.mjs";

// Prettier handles formatting, so turn off the stylistic rules that would conflict with it
export default withNuxt().append(prettier);
