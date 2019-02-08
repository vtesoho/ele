module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "space-before-function-paren": 0,
    "comma-dangle": [2, "never"],
    "indent": 0,
    "semi": [1, "never"],
    "no-multi-spaces": 0,
    "prettier/prettier": "off"
  },
  parserOptions: {
    parser: "typescript-eslint-parser"
  }
};
