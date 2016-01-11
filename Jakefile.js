/* globals jake:false, desc:false, task:false, complete:false, fail:false */

(function (){
    "use strict";

    var semver = require("semver");
    var jshint = require("simplebuild-jshint");

    //**** General-purpose tasks
    desc("Default build");
    task("default", ["version", "lint"], function(){
        console.log("\n\nBUILD OK");
    });

    desc("Run a local server");
    task("run", function(){
        jake.exec("node node_modules/http-server/bin/http-server src", {interactive:true}, complete);
    });
    //**** Supporting tasks

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

        jshint.checkFiles({
            files: "Jakefile.js",
            options: {
                bitwise: true,
                eqeqeq: true,
                forin: true,
                freeze: true,
                futurehostile: true,
                latedef: "nofunc",
                noarg: true,
                nocomma: true,
                nonbsp: true,
                nonew: true,
                strict: true,
                undef: true,

                node: true,
                browser: true
            },
            globals: {}
        }, complete, fail);

    }, {async: true});
}());
