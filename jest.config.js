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
  testRunner: "jest-circus/runner"
// Cannot have testregex or the task will fail when run with vstest.console.exe. Source:https://developercommunity.visualstudio.com/content/problem/977754/test-explorer-not-able-to-run-jest-tests.html
}