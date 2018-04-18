module.exports = {
  projects: ["<rootDir>/packages/*"],
  coverageReporters: ["text", "lcov"],
  collectCoverageFrom: ["src/**/*.ts"],
  coverageDirectory: "coverage"
}
