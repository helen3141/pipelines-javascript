module.exports = {
  reporters: [
    "default",
    ["<rootDir>/customReporter.js", {}],
    ["jest-junit", {
      "output": "./quality/junit.xml",
      "ancestorSeparator": " > ",
      "classNameTemplate": "{filepath}",
      "titleTemplate": "{title}"
    }]
  ],
  testRunner: "jest-circus/runner",
}