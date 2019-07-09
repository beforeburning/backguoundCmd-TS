// 随机数
export default class Random implements RandomInterface {
    lower: number;
    upper: number;

    constructor(lower: number, upper: number) {
        this.lower = lower;
        this.upper = upper;
    }

    random() {
        return Math.floor(Math.random() * ((this.upper + 1) - this.lower)) + this.lower;
    }
}
