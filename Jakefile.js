/* globals jake:false, desc:false, task:false, complete:false, fail:false, directory: false */

(function (){
    "use strict";

    var semver = require("semver");
    var jshint = require("simplebuild-jshint");
    var karma = require("simplebuild-karma");
    var shell = require("shelljs");

    var KARMA_CONFIG = "karma.conf.js";
    var DIST_DIR = "generated/dist";

    //**** General-purpose tasks
    desc("Start the Karma server (run this first)");
    task("karma", function(){
        console.log("Starting Karma server:");
        karma.start({
            configFile: KARMA_CONFIG
        }, complete, fail);
    }, {async: true});

    desc("Default build");
    task("default", ["version", "lint", "test"], function(){
        console.log("\n\nBUILD OK");
    });

    desc("Run a local server");
    task("run", ["build"], function(){
        jake.exec(
            "node node_modules/http-server/bin/http-server " + DIST_DIR,
            {interactive:true},
            complete);
    }, {asyc:true} );

    desc("Erase all generated files");
    task("clean", function(){
        console.log("Erase generated files");
        shell.rm("-rf", "generated");
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
            files: ["Jakefile.js", "src/javascript/**/*.js"],
            options: lintOptions(),
            globals: lintGlobals()
        }, complete, fail);

    }, {async: true});

    desc("Run tests");
    task("test", function(){
       console.log("Testing JavaScript:");

        karma.run({
            configFile: KARMA_CONFIG,
            expectedBrowsers:[
                "Chrome 47.0.2526 (Windows 10 0.0.0)"
                //"Edge 13.10586.0 (Windows 10 0.0.0)",
                //"Mobile Safari 9.0.0 (iOS 9.2.0)"
            ],
            strict: !process.env.loose
        }, complete, fail);
    }, {async: true});

    desc("Build distribution directory");
    task("build", [DIST_DIR], function(){
        console.log("Building distribution directory");

        shell.rm("-rf", DIST_DIR+"/*");
        shell.cp("src/content/*", DIST_DIR);

        jake.exec(
            "node node_modules/browserify/bin/cmd.js src/javascript/app.js -o " + DIST_DIR + "/bundle.js",
            { interactive: true },
            complete
        );
    }, {async:true});

    directory(DIST_DIR);

    function lintOptions(){
        return {
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
        };
    }

    function lintGlobals(){
        return {
            // Mocha
            describe: false,
            it: false,
            before: false,
            after: false,
            beforeEach: false,
            afterEach: false
        };
    }
}());
