"use strict";
// 随机数
Object.defineProperty(exports, "__esModule", { value: true });
class Random {
    constructor(lower, upper) {
        this.lower = lower;
        this.upper = upper;
    }
    random() {
        return Math.floor(Math.random() * ((this.upper + 1) - this.lower)) + this.lower;
    }
}
exports.default = Random;
//# sourceMappingURL=random.js.map