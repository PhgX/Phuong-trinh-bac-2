"use strict";
exports.__esModule = true;
exports.QuadraticEquation = void 0;
var QuadraticEquation = /** @class */ (function () {
    function QuadraticEquation(a, b, c, delta, x) {
        if (delta === void 0) { delta = 0; }
        if (x === void 0) { x = []; }
        this._a = a;
        this._b = b;
        this._c = c;
        this._x = x;
    }
    QuadraticEquation.prototype.getDiscriminant = function () {
        this.delta = Math.pow(this._b, 2) - 4 * this._a * this._c;
        if (this.delta === 0) {
            this._x = [-this._b / 2 * this._a];
        }
        else if (this.delta > 0) {
            this._x = [(-this._b + Math.sqrt(this.delta)) / 2 * this._a,
                (-this._b - Math.sqrt(this.delta)) / 2 * this._a];
        }
        else {
            return this._x = ["Phuong trinh vo nghiem"];
        }
        return this._x;
    };
    return QuadraticEquation;
}());
exports.QuadraticEquation = QuadraticEquation;
