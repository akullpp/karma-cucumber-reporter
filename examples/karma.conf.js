"use strict";

module.exports = function(config) {
  config.set({
    singleRun: true,
    files: ["test/**/*"],
    frameworks: ["mocha", "chai"],
    browsers: ["Chrome"],
    reporters: ["cucumber"],
    cucumberReporter: {
      out: "report/cucumber.json",
      prefix: "XYZ"
    }
  });
};
