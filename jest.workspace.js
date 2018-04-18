module.exports = {
  testMatch: ["<rootDir>/src/**/*.spec.ts"],
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  moduleNameMapper: {
    "\\@happy-hackers-monorepo/(.*)": "<rootDir>/../$1/src"
  },
  moduleFileExtensions: ["json", "js", "ts"]
}
