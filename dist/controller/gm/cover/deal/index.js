"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parameter_1 = require("./parameter");
const docSize_1 = require("./docSize");
const path_1 = require("path");
const gm = require("gm");
class Synthetic {
    constructor(random, coversPath, portraitPath, id, title, name, dept, hospital, position) {
        // 静态文件
        this.fontPath = path_1.join(__dirname, `../../../../../static/font/SOURCEHANSANSCN-MEDIUM_0.OTF`);
        this.fontPathTtile = path_1.join(__dirname, `../../../../../static/font/SOURCEHANSANSCN-BOLD.OTF`);
        this.random = random;
        this.coversPath = coversPath;
        this.portraitPath = portraitPath;
        this.id = id;
        this.title = title;
        this.name = name;
        this.dept = dept;
        this.hospital = hospital;
        this.position = position;
    }
    // 文字参数 && 目录定义
    parameter() {
        let parameter = new parameter_1.default();
        // 生成文字参数
        this.parameterData = parameter.parameter(this.title, this.random);
        // 医生抠图src
        this.photo = `${path_1.join(this.portraitPath, 'photo.png')}`;
        // 输出目录
        this.resSrc = path_1.join(this.coversPath, `${this.id}.jpg`);
    }
    // 图片合成
    synthetic(callback) {
        // 计算文字信息参数
        this.parameter();
        // 计算图片大小 && 修改医生抠图文件尺寸
        let docSize = new docSize_1.default();
        docSize.docSize(this.photo, res => {
            this.docData = res;
            // 封面图合成
            gm(this.parameterData['backPath'])
                .font(this.fontPathTtile)
                .fontSize(this.parameterData['titleFontSize'])
                .fill(this.parameterData['titleFontColor'])
                .drawText(this.parameterData['titleX'], this.parameterData['titleY'], `${this.parameterData['titleSplic']}`, 'Center')
                .font(this.fontPath)
                .fontSize(this.parameterData['nameFontSize'])
                .drawText(this.parameterData['nameX'], this.parameterData['nameY'], `${this.name} ${this.position}`, 'Center')
                .fontSize(this.parameterData['deptFontSize'])
                .drawText(this.parameterData['nameX'], this.parameterData['nameY'] * 2 - this.parameterData['docOffset'], `${this.hospital} ${this.dept}`, 'Center')
                .draw(`image Over ${this.docData['left']}, ${450 - this.docData['headerHeight']}, ${this.docData['headerWidth']}, ${this.docData['headerHeight']} ${this.photo}`)
                .quality(60)
                .write(this.resSrc, (e) => {
                // 输出的图片路径
                if (e) {
                    console.log(e);
                    callback();
                }
                else {
                    callback();
                }
            });
        });
    }
}
exports.default = Synthetic;
//# sourceMappingURL=index.js.map