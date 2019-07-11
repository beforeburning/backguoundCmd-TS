"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deal_1 = require("./deal");
class Cover {
    constructor(data, coversPath, portraitPath, random) {
        this.data = data;
        this.coversPath = coversPath;
        this.portraitPath = portraitPath;
        this.random = random;
    }
    // 开始处理竖标题
    start(callback) {
        this.splitDeal(() => {
            callback();
        });
    }
    splitDeal(callback) {
        let arr = this.data.split('|');
        this.id = parseInt(arr[0]);
        this.title = arr[2];
        this.name = arr[3];
        this.dept = arr[4];
        this.hospital = arr[5];
        this.position = arr[8].split('&')[0];
        let deal = new deal_1.default(this.random, this.coversPath, this.portraitPath, this.id, this.title, this.name, this.dept, this.hospital, this.position);
        deal.synthetic(() => {
            console.log(`封面图 --- ${this.title} --- 生成完毕`);
            callback();
        });
    }
}
exports.default = Cover;
//# sourceMappingURL=index.js.map