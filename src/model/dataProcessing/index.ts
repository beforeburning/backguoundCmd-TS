import ReadTxt from '../fileOperation/readTXT'

export default class DataProcessing extends ReadTxt {
    // 目录结构
    readdir: object;
    // 词条id
    id: string;
    // segmentation: string[];
    // 是否全量
    // amount: boolean = true;

    constructor(readdir: object, id: string) {
        super();
        this.readdir = readdir;
        this.id = id;
    }

    cycle() {
        let txtPath: string = this.readdir['txt'];

        // 是否全量 暂时不需要这层判断
        // if (this.id !== '0') {
        //     this.segmentation = this.id.split(',');
        //     this.amount = false;
        // }

        // 获取txt内数据
        let data: any = super.read(txtPath);
        return data.split('&');
    }

}
