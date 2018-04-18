module.exports = wallaby => ({
  debug: true,
  workers: {
    initial: 2,
    regular: 1
  },
  delays: {
    run: 1000
  },
  reportConsoleErrorAsError: true,
  env: {
    type: "node"
  },
  testFramework: "jest",
  files: [
    "jest.config.js",
    "tsconfig.json",
    "packages/*/src/**",
    "!packages/**/*.spec.ts"
  ],
  tests: ["packages/**/*.spec.ts", "!packages/**/node_modules/**"],
  compilers: {
    "**/*.ts": wallaby.compilers.typeScript({
      typescript: require("typescript")
    })
  },
  setup: w => {
    const jestConfig = require("./jest.config.js")
    jestConfig.moduleNameMapper = {
      "^@happy-hackers-monorepo/(.+)": w.projectCacheDir + "/packages/$1/src"
    }
    w.testFramework.configure(jestConfig)
  }
})
