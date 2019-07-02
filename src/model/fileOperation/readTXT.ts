import {readdirSync, readFileSync} from 'fs';
import {join} from 'path';

export default class ReadTXT {
    constructor() {

    }

    read(txtPath: string) {
        // 读取目录下文件
        let path = readdirSync(txtPath);
        return path.toString() === ''
            ? console.log('未找到.txt文件')
            : readFileSync(join(txtPath, path[0]), 'utf-8');

    }
}

