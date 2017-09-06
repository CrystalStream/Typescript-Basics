"use strict";
var myMath;
(function (myMath) {
    function calculateHip(a, b) {
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    }
    myMath.calculateHip = calculateHip;
})(myMath || (myMath = {}));
