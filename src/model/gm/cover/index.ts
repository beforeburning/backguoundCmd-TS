import Deal from './deal'

export default class Cover {
    data: string;
    coversPath: string;
    portraitPath: string;
    random: number;
    // 词条id
    private id: number;
    // 词条标题
    private title: string;
    // 医生名称
    private name: string;
    // 科室
    private dept: string;
    // 医院
    private hospital: string;
    // 职称
    private position: string;

    constructor(data: string, coversPath: string, portraitPath: string, random: number) {
        this.data = data;
        this.coversPath = coversPath;
        this.portraitPath = portraitPath;
        this.random = random;
    }

    // 开始处理竖标题
    start(callback) {
        this.splitDeal(() => {
            callback();
        });
    }

    splitDeal(callback) {
        let arr = this.data.split('|');
        this.id = parseInt(arr[0]);
        this.title = arr[2];
        this.name = arr[3];
        this.dept = arr[4];
        this.hospital = arr[5];
        this.position = arr[8].split('&')[0];

        let deal = new Deal(this.random, this.coversPath, this.portraitPath, this.id, this.title, this.name, this.dept, this.hospital, this.position);
        deal.synthetic(() => {
            console.log(`封面图 --- ${this.title} --- 生成完毕`);
            callback()
        })
    }


}

