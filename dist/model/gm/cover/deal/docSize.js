"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gm = require("gm");
class DocSize {
    constructor() {
        this.left = 10;
    }
    docSize(photo, callback) {
        gm(photo).size((err, value) => {
            if (err) {
                console.log('未找到医生抠图文件');
                callback();
            }
            else {
                this.docWidth = value.width;
                this.docHeight = value.height;
                // 计算医生抠图合成后大小
                this.headerHeight = this.docHeight * 400 / this.docWidth;
                this.headerWidth = 400;
                if (this.headerHeight >= 400) {
                    this.headerWidth = 400 * (400 / this.headerHeight);
                    this.headerHeight = 400;
                    this.left = 40;
                }
                callback(this);
            }
        });
    }
}
exports.default = DocSize;
//# sourceMappingURL=docSize.js.map