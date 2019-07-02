import Directory from '../../model/fileOperation/directory';
import DataProcessing from '../../model/dataProcessing';
import Generate from '../generate';

export default class CommanderReq {
    path: string;
    id: string;

    // 目录结构
    readdir: object;

    // txt数据 数组化
    txtArr: string[];

    constructor(path: string, id: string) {
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
        let dirFunc = new Directory(this.path);
        this.readdir = dirFunc.readdir();

        // 获取数据
        let dataCycle = new DataProcessing(this.readdir, this.id);
        this.txtArr = dataCycle.cycle();

        // 开始生成竖标题和封面图
        let generate = new Generate(this.txtArr, this.readdir);
        generate.output();

    }
}

