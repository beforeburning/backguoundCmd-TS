import File from '../../common/File';
import Generate from '../generate';

export default class CommanderReq {
    path: string;
    id: string;

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

        // 获取文件数据
        let file = new File();
        let fileObj = file.cycle(this.path);

        // 开始生成竖标题和封面图
        let generate = new Generate(fileObj['data'], fileObj['dir']);
        generate.output();

    }
}

