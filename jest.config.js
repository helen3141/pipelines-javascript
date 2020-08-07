module.exports = {
  reporters: [
    "default",
    ["jest-junit", {
      "output": "./quality/junit.xml",
      "ancestorSeparator": " > ",
      "classNameTemplate": "{filepath}",
      "titleTemplate": "{title}"
    }]
  ],
  testRunner: "jest-circus/runner",
}