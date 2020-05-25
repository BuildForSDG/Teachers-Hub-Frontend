module.exports = {
  moduleFileExtensions: ["js", "json"],
  rootDir: "src/__tests__",
  testRegex: [".spec.js$", ".test.js$"],
  coverageDirectory: "./coverage",
  testEnvironment: "node",
  moduleDirectories: [
    "node_modules"
  ],
  setupFilesAfterEnv: [
    "<rootDir>/setupTests.js"
  ],
  modulePaths: [
    "src",
    "__tests__"
  ],
  presets: ["@babel/preset-env", "@babel/preset-react"]
};
