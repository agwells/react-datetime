module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true
  },
  globals: {
    require: true,
    module: true
  },
  // Enables rules that report common problems,
  // see http://eslint.org/docs/rules/ for list
  extends: "eslint:recommended",
  rules: {
    //TODO: Extend rules in root folder
    // Enforce the use of variables within the scope they are defined
    "block-scoped-var": 2,
    // Enforce camelcase naming convention
    camelcase: 2,
    // Require the use of === and !==
    eqeqeq: [2, "smart"],
    // Enforce the consistent use of the radix argument when using parseInt()
    radix: 2
  }
};
