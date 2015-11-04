(function (){
    "use strict";

    var semver = require("semver");

    desc("Default build");
    task("default", ["version"], function(){
        console.log("\n\nBUILD OK");
    });

    desc("Check Node version");
    task("version", function(){
        console.log("Checking Node version");

        var package_json = require("./package.json");
        var expected_node_version = package_json.engines.node;
        let actual_node_version = process.version;
        if (semver.neq(actual_node_version, expected_node_version))
            fail("Incorrect Node version: expected " + expected_node_version + " but was " + actual_node_version);
    });
}());
