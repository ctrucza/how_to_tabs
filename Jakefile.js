(function (){
    "use strict";

    var expected_node_version = "v4.2.1";

    desc("Default build");
    task("default", ["version"], function(){
        console.log("\n\nBUILD OK");
    });

    desc("Check Node version");
    task("version", function(){
        console.log("Checking Node version");

        let actual_node_version = process.version;
        if (actual_node_version !== expected_node_version)
            fail("Incorrect Node version: expected " + expected_node_version + " but was " + actual_node_version);
    });
}());
