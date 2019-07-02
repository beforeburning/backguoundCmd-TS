"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const random_1 = require("../tools/random");
const verticaltitles_1 = require("../../model/gm/verticaltitles");
const cover_1 = require("../../model/gm/cover");
class Generate {
    constructor(arr, path) {
        this.arr = arr;
        this.path = path;
    }
    output() {
        // 生成随机数 控制背景图模版编号
        this.random = new random_1.default(1, 3).random();
        // 竖标题
        let vert = this.arr.map(item => {
            return new Promise(resolve => {
                let vert = new verticaltitles_1.default(item, this.path['verticaltitles']);
                vert.start(() => {
                    resolve();
                });
            });
        });
        // 竖标题生成完毕
        let vertPromise = Promise.all(vert);
        // 封面图
        let cover = this.arr.map(item => {
            return new Promise(resolve => {
                let cover = new cover_1.default(item, this.path['covers'], this.path['portrait'], this.random);
                cover.start(() => {
                    resolve();
                });
            });
        });
        // 封面图生成完毕
        let coverPromise = Promise.all(cover);
        // over
        Promise.all([vertPromise, coverPromise]).then(() => {
            console.log('--- 生成结束 ---');
        });
    }
}
exports.default = Generate;
//# sourceMappingURL=index.js.map