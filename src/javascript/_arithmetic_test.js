(function () {
    "use strict";

    var assert = require("./assert.js");

    describe("Something", function(){

        it("does something", function(){
            //assert.equal(arithmetic.add(3, 4), 7);
            var div = document.createElement("div");

            div.innerHTML = "This is an example";

            document.body.appendChild(div);
        });

    });

}());