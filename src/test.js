(function () {
    "use strict";

    //var assert = require("chai").assert;

    var assert = {
        equal: function equal(actual, expected){
            if (actual !== expected) throw new Error("expected " + expected + " but was " + actual);
        }
    };

    describe("Addition", function(){
        it("adds positive numbers", function(){
            assert.equal(add(3, 4), 7);
        });

        it("uses IEEE 754 floating point", function(){
            assert.equal(add(0.1, 0.2), 0.30000000000000004);
        });
    });


    function add(a, b){
        return a + b;
    }
}());