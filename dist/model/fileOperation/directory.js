"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
class Directory {
    constructor(path) {
        this.path = path;
    }
    readdir() {
        // 同步读取文件目录 获取绝对路径
        let pathSrc = {};
        fs_1.readdirSync(this.path).forEach(item => pathSrc[item] = path_1.join(this.path, item));
        return pathSrc;
    }
}
exports.default = Directory;
//# sourceMappingURL=directory.js.map