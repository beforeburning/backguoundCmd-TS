import {readdirSync} from 'fs';
import {join} from 'path';

export default class Directory {
    path: string;

    constructor(path: string) {
        this.path = path;
    }

    readdir() {
        // 同步读取文件目录 获取绝对路径
        let pathSrc = {};
        readdirSync(this.path).forEach(item => pathSrc[item] = join(this.path, item));
        return pathSrc;
    }
}
