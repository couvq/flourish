import { defaults } from "jest-config";

const config = {
  testEnvironment: "jsdom",
  moduleFileExtensions: [...defaults.moduleFileExtensions, "mts"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/components/**/*.{js,jsx,ts,tsx}",
    // todo - uncomment this once Flex component is done and can add tests
    // "src/layouts/**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/stories/**",
  ],
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/styleMock.js",
  },
};

export default config;
