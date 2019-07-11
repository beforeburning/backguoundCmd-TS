"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const gm = require("gm");
class Deal {
    constructor(titleOne, titleTwo, id, covers) {
        // 文字路径
        this.fontPath = path_1.join(__dirname, `../../../../../static/font/SOURCEHANSANSCN-MEDIUM_0.OTF`);
        this.backPath = path_1.join(__dirname, `../../../../../static/background/verticalTitle.png`);
        this.titleOne = titleOne;
        this.titleTwo = titleTwo;
        this.coversPath = covers;
        this.id = id;
    }
    // 单行
    single(callback) {
        let resSrc = path_1.join(this.coversPath, `${this.id}.png`);
        gm(this.backPath)
            .fill('#ffffff')
            .font(this.fontPath)
            .fontSize(20)
            .drawText(33, 90, `${this.titleOne}`)
            .quality(100)
            .write(resSrc, (e) => {
            // 输出的图片路径
            if (e) {
                console.log(e.message);
                callback();
            }
            else {
                callback();
            }
        });
    }
    // 双行
    double(callback) {
        let resSrc = path_1.join(this.coversPath, `${this.id}.png`);
        gm(this.backPath)
            .fill('#ffffff')
            .font(this.fontPath)
            .fontSize(20)
            .drawText(45, 90, `${this.titleOne}`)
            .drawText(20, 90, `${this.titleTwo}`)
            .quality(100)
            .write(resSrc, (e) => {
            if (e) {
                console.log(e.message);
                callback();
            }
            else {
                callback();
            }
        });
    }
}
exports.default = Deal;
//# sourceMappingURL=index.js.map