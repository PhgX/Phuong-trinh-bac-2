"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuadraticEquation = void 0;
class QuadraticEquation {
    constructor(a, b, c, delta = 0, x = []) {
        this._a = a;
        this._b = b;
        this._c = c;
        this._x = x;
    }
    getDiscriminant() {
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
    }
}
exports.QuadraticEquation = QuadraticEquation;
//# sourceMappingURL=main.js.map