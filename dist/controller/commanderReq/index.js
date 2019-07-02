"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const directory_1 = require("../../model/fileOperation/directory");
const dataProcessing_1 = require("../../model/dataProcessing");
const generate_1 = require("../generate");
class CommanderReq {
    constructor(path, id) {
        this.path = path;
        this.id = id;
    }
    // 分析参数
    start() {
        if (!this.path) {
            console.log('缺少参数: -p 任务路径');
            return false;
        }
        if (!this.id) {
            console.log('缺少参数: -i 指定词条 全量为0');
            return false;
        }
        // directory获取目录结构
        let dirFunc = new directory_1.default(this.path);
        this.readdir = dirFunc.readdir();
        // 获取数据
        let dataCycle = new dataProcessing_1.default(this.readdir, this.id);
        this.txtArr = dataCycle.cycle();
        // 开始生成竖标题和封面图
        let generate = new generate_1.default(this.txtArr, this.readdir);
        generate.output();
    }
}
exports.default = CommanderReq;
//# sourceMappingURL=index.js.map