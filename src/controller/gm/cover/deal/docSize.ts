import * as gm from 'gm';

export default class DocSize {
    private left: number = 10;
    private docWidth: number;
    private docHeight: number;
    private headerWidth: number;
    private headerHeight: number;

    docSize(photo: string, callback) {
        gm(photo).size((err, value) => {
            if (err) {
                console.log('未找到医生抠图文件');
                callback();
            } else {
                this.docWidth = value.width;
                this.docHeight = value.height;
                // 计算医生抠图合成后大小
                this.headerHeight = this.docHeight * 400 / this.docWidth;
                this.headerWidth = 400;
                if (this.headerHeight >= 400) {
                    this.headerWidth = 400 * (400 / this.headerHeight);
                    this.headerHeight = 400;
                    this.left = 40;
                }
                callback(this);
            }
        })
    }
}
