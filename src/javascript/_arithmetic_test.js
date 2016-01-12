(function () {
    "use strict";

    var assert = require("./assert.js");

    describe("Something", function(){

        it("does something", function(){
            var div = document.createElement("div");

            div.innerHTML = "This is an example";

            document.body.appendChild(div);

            var p = document.createElement("p");
            p.innerHTML = "Some long paragraph";
            div.appendChild(p);

            div.parentNode.removeChild(div);
        });

    });

}());