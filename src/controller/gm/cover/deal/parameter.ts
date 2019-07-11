import {join} from 'path';

export default class parameter {
    // 参数
    // 封面图
    private backPath: string;
    // 封面图大小
    readonly coverWidth: number = 800;
    readonly coverHeight: number = 450;
    // 标题颜色
    private titleFontColor = '';
    // 标题文字大小
    private titleFontSize: number;
    // 标题 x轴
    private titleX: number;
    // 标题 y轴
    private titleY: number;
    // 名称文字大小
    private nameFontSize: number;
    // name X轴
    private nameX: number;
    // name Y轴
    private nameY: number;
    // 科室文字大小
    private deptFontSize: number;
    // doc偏移量
    private docOffset: number = 0;
    // 标题
    private titleSplic: string;

    parameter(title: string, random: number) {
        switch (random) {
            case 1:
                // 背景图
                this.backPath = join(__dirname, `../../../../../static/background/cover/1.jpg`);
                // 标题颜色
                this.titleFontColor = '#7e9fcd';
                // 标题文字大小
                this.titleFontSize = 50;
                // 标题 x轴
                this.titleX = 150;
                // 标题 y轴
                this.titleY = -80;
                this.nameFontSize = 22;
                this.nameX = 160;
                // 名称 Y轴 居中
                this.nameY = 54;
                // 科室文字大小
                this.deptFontSize = 18;
                break;
            case 2:
                // 背景图
                this.backPath = join(__dirname, `../../../../../static/background/cover/2.jpg`);
                // 标题颜色
                this.titleFontColor = '#663940';
                // 标题文字大小
                this.titleFontSize = 48;
                // 标题 x轴
                this.titleX = 150;
                // 标题 y轴
                this.titleY = -80;
                this.nameFontSize = 22;
                this.nameX = 160;
                // 名称 Y轴 居中
                this.nameY = 40;
                // 科室文字大小
                this.deptFontSize = 18;
                break;
            case 3:
                // 背景图
                this.backPath = join(__dirname, `../../../../../static/background/cover/3.jpg`);
                // 标题颜色
                this.titleFontColor = '#302825';
                // 标题文字大小
                this.titleFontSize = 48;
                // 标题 x轴
                this.titleX = 130;
                // 标题 y轴
                this.titleY = -80;
                this.nameFontSize = 22;
                this.nameX = 140;
                // 名称 Y轴 居中
                this.nameY = 50;
                // 科室文字大小
                this.deptFontSize = 18;
                // 医院信息偏移量
                this.docOffset = -20;
                break;
            default:
                console.log('未找到封面图');
        }

        let titleLen = title.length;
        if (titleLen <= 8) {
            this.titleSplic = title;
        } else if (titleLen <= 20) {
            this.titleFontSize = 42;
            this.titleY = -60;
            this.titleSplic = `${title.slice(0, 10)}\n${title.slice(10)}`;
        } else if (titleLen <= 30) {
            this.titleFontSize = 42;
            this.titleY = -80;
            this.titleSplic = `${title.slice(0, 10)}\n${title.slice(10, 20)}\n${title.slice(20)}`;
        } else {
            console.log(`--- 封面图:${title}大于三十个字 请手动处理 ---`);
            this.titleFontSize = 42;
            this.titleY = -80;
            this.titleSplic = `${title.slice(0, 10)}\n${title.slice(10, 20)}\n${title.slice(20)}`;
        }

        return this;
    }
}
