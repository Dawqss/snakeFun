import { MatrixType } from "../types";
export declare class Arena {
    static width: number;
    static height: number;
    static getRandomIndexForWidth: () => number;
    static getRandomIndexForHeight: () => number;
    getArenaMatrix: () => MatrixType;
}
