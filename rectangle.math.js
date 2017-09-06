"use strict";
var myMath;
(function (myMath) {
    function calculateArea(a, b) {
        return a * b;
    }
    myMath.calculateArea = calculateArea;
})(myMath || (myMath = {}));
