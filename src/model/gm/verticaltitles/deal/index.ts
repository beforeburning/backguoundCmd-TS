import {join} from 'path'
import * as gm from 'gm';

export default class Deal {
    // 数据
    titleOne: string;
    titleTwo: string;
    coversPath: string;
    id: number;

    // 文字路径
    readonly fontPath: string = join(__dirname, `../../../../../static/font/SOURCEHANSANSCN-MEDIUM_0.OTF`);
    readonly backPath: string = join(__dirname, `../../../../../static/background/verticalTitle.png`);

    constructor(titleOne: string, titleTwo: string, id: number, covers: string) {
        this.titleOne = titleOne;
        this.titleTwo = titleTwo;
        this.id = id;
        this.coversPath = covers;
    }

    // 单行
    single(callback) {
        let resSrc = join(this.coversPath, `${this.id}.png`);
        gm(this.backPath)
            .fill('#ffffff')
            .font(this.fontPath)
            .fontSize(20)
            .drawText(33, 90, `${this.titleOne}`)
            .quality(100)
            .write(resSrc, (e) => {
                // 输出的图片路径
                if (e) {
                    console.log(e.message);
                    callback();
                } else {
                    callback();
                }
            })
    }

    // 双行
    double(callback) {
        let resSrc = join(this.coversPath, `${this.id}.png`);
        gm(this.backPath)
            .fill('#ffffff')
            .font(this.fontPath)
            .fontSize(20)
            .drawText(45, 90, `${this.titleOne}`)
            .drawText(20, 90, `${this.titleTwo}`)
            .quality(100)
            .write(resSrc, (e) => {
                if (e) {
                    console.log(e.message);
                    callback();
                } else {
                    callback();
                }
            })
    }


}
