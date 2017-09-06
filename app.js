var myMath;
(function (myMath) {
    function calculateArea(a, b) {
        return a * b;
    }
    myMath.calculateArea = calculateArea;
})(myMath || (myMath = {}));
var myMath;
(function (myMath) {
    function calculateHip(a, b) {
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    }
    myMath.calculateHip = calculateHip;
})(myMath || (myMath = {}));
/// <reference path="./rectangle.math.ts" />
/// <reference path="./triangle.math.ts" />
// We import namespaces like abover
console.log('Rectangle: ', myMath.calculateArea(5, 10));
console.log('Rectangle: ', myMath.calculateHip(5, 10));
