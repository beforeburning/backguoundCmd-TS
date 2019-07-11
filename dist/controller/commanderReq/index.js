"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const File_1 = require("../../common/File");
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
        // 获取文件数据
        let file = new File_1.default();
        let fileObj = file.cycle(this.path);
        // 开始生成竖标题和封面图
        let generate = new generate_1.default(fileObj['data'], fileObj['dir']);
        generate.output();
    }
}
exports.default = CommanderReq;
//# sourceMappingURL=index.js.map