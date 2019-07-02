"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
class ReadTXT {
    constructor() {
    }
    read(txtPath) {
        // 读取目录下文件
        let path = fs_1.readdirSync(txtPath);
        return path.toString() === ''
            ? console.log('未找到.txt文件')
            : fs_1.readFileSync(path_1.join(txtPath, path[0]), 'utf-8');
    }
}
exports.default = ReadTXT;
//# sourceMappingURL=readTXT.js.map