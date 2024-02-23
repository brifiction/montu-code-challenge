import type { Config } from "@jest/types";

// Jest configuration options
const config: Config.InitialOptions = {
  moduleFileExtensions: ["js", "ts"],
  testEnvironment: "node",
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!**/node_modules/**"],
  coveragePathIgnorePatterns: [
    "node_modules",
    "test-config",
    "interfaces",
    "jestGlobalMocks.ts",
    ".module.ts",
    "<rootDir>/src/app/main.ts",
    ".mock.ts",
    "constants.ts",
  ],
  coverageReporters: ["clover", "json", "lcov", ["text", { skipFull: true }]],
};

export default config;
