(function (){
    "use strict";

    var semver = require("semver");

    desc("Default build");
    task("default", ["version", "lint"], function(){
        console.log("\n\nBUILD OK");
    });

    desc("Check Node version");
    task("version", function(){
        console.log("Checking Node version");

        var package_json = require("./package.json");
        var expected_node_version = package_json.engines.node;
        var actual_node_version = process.version;
        if (semver.neq(actual_node_version, expected_node_version))
            fail("Incorrect Node version: expected " + semver.clean(expected_node_version) + " but was " + semver.clean(actual_node_version));
    });

    desc("Lint JavaScript code");
    task("lint", function(){
        console.log("Linting JavaScript");

        jake.exec("node node_modules/jshint/bin/jshint Jakefile.js", {interactive: true}, complete);
    }, {async: true});
}());
