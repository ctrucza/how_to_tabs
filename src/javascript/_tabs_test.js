(function () {
    "use strict";

    var assert = require("./assert.js");
    var tabs = require("./tabs.js");

    describe("Tabs", function(){

        it("hides an element", function(){
            var element = document.createElement("div");

            tabs.initialize(element);

            var styles = getComputedStyle(element);
            var display = styles.getPropertyValue("display");
            assert.equal(display, "none");
        });

    });

}());