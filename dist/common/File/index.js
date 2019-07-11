"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
class Index {
    constructor() {
    }
    // 同步读取文件目录 获取绝对路径
    readdir(path) {
        let pathSrc = {};
        fs_1.readdirSync(path).forEach(item => pathSrc[item] = path_1.join(path, item));
        return pathSrc;
    }
    // 读取文件内容
    readTxt(txtPath) {
        let path = fs_1.readdirSync(txtPath);
        return path.toString() === ''
            ? console.log('未找到.txt文件')
            : fs_1.readFileSync(path_1.join(txtPath, path[0]), 'utf-8');
    }
    // 返回目录下文件TXT文件 和目录结构
    cycle(path) {
        let dir = this.readdir(path);
        let txtPath = dir['txt'];
        // 获取txt内数据
        let data = this.readTxt(txtPath);
        return {
            dir: dir,
            data: data.split('&')
        };
    }
}
exports.default = Index;
//# sourceMappingURL=index.js.map