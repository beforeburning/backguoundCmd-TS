"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readTXT_1 = require("../fileOperation/readTXT");
class DataProcessing extends readTXT_1.default {
    // segmentation: string[];
    // 是否全量
    // amount: boolean = true;
    constructor(readdir, id) {
        super();
        this.readdir = readdir;
        this.id = id;
    }
    cycle() {
        let txtPath = this.readdir['txt'];
        // 是否全量 暂时不需要这层判断
        // if (this.id !== '0') {
        //     this.segmentation = this.id.split(',');
        //     this.amount = false;
        // }
        // 获取txt内数据
        let data = super.read(txtPath);
        return data.split('&');
    }
}
exports.default = DataProcessing;
//# sourceMappingURL=index.js.map