// 文件类接口
interface FileInterface {
    readdir(path: string): object;

    readTxt(path: string): void | string;

    cycle(path: string): object;

}
