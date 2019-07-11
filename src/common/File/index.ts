import {readdirSync, readFileSync} from 'fs';
import {join} from 'path';

export default class Index implements FileInterface {
    constructor() {
    }

    // 同步读取文件目录 获取绝对路径
    public readdir(path: string) {
        let pathSrc: object = {};
        readdirSync(path).forEach(item => pathSrc[item] = join(path, item));
        return pathSrc;
    }

    // 读取文件内容
    public readTxt(txtPath: string) {
        let path = readdirSync(txtPath);
        return path.toString() === ''
            ? console.log('未找到.txt文件')
            : readFileSync(join(txtPath, path[0]), 'utf-8');
    }

    // 返回目录下文件TXT文件 和目录结构
    public cycle(path: string) {
        let dir = this.readdir(path);
        let txtPath: string = dir['txt'];
        // 获取txt内数据
        let data: any = this.readTxt(txtPath);
        return {
            dir: dir,
            data: data.split('&')
        };
    }
}
