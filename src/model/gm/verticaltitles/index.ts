import Deal from './deal'

export default class verticaltitles {
    data: string;
    coversPath: string;
    // 词条id
    id: number;
    // 标题1
    titleOne: string = '';
    // 标题2
    titleTwo: string = '';

    constructor(data: string, coversPath: string) {
        this.data = data;
        this.coversPath = coversPath;
    }

    // 开始处理竖标题
    start(callback) {
        this.splitDeal(() => {
            callback()
        });
    }

    // 数据分割 标题处理
    splitDeal(callback) {
        // 分割
        let arr = this.data.split('|');
        this.id = parseInt(arr[0]);
        let title = arr[2];

        // 标题是否换行
        let len = title.length;

        if (len <= 12) {
            for (let i = 0; i < title.length; i++) {
                this.titleOne += `${title[i]}\n`;
            }
            let deal = new Deal(this.titleOne, this.titleTwo, this.id, this.coversPath);
            deal.single(() => {
                console.log(`竖标题 --- ${title} --- 生成完毕`);
                callback();
            })
        } else {
            let middle = len / 2;
            let oneText = title.substr(0, middle);
            for (let i = 0; i < oneText.length; i++) {
                this.titleOne += `${oneText[i]}\n`;
            }
            let twoText = title.substr(middle, len);
            for (let i = 0; i < twoText.length; i++) {
                this.titleTwo += `${twoText[i]}\n`;
            }
            let deal = new Deal(this.titleOne, this.titleTwo, this.id, this.coversPath);
            deal.double(() => {
                console.log(`竖标题 --- ${title} --- 生成完毕`);
                callback();
            })
        }

    }

}
