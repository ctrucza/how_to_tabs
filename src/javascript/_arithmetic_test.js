(function () {
    "use strict";

    var assert = require("./assert.js");
    var arithmetic = require("./arithmetic.js");

    describe("Addition", function(){

        it("adds positive numbers", function(){
            assert.equal(arithmetic.add(3, 4), 7);
        });

        it("uses IEEE 754 floating point", function(){
            assert.equal(arithmetic.add(0.1, 0.2), 0.30000000000000004);
        });

    });

    describe("Subtraction", function(){

        it("subtracts positive numbers", function(){
           assert.equal(arithmetic.subtract(10,3), 7);
        });

    });

}());