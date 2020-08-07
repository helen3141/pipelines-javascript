const fs = require("fs");

class CustomReporter {
    constructor(globalConfig, options) {
      this._globalConfig = globalConfig;
      this._options = options;
    }
  
    onRunComplete(contexts, results) {
        fs.writeFileSync("test-results.json", JSON.stringify(results), { indent: "  ", declaration: true });
    }
}

module.exports = CustomReporter;