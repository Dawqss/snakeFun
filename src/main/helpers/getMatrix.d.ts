import { MatrixType, OffsetType } from "../types";
interface Matrix1 {
    offsets: OffsetType[];
    fill: number;
    matrix?: MatrixType;
}
export declare const getMatrix: ({ offsets, fill, matrix }: Matrix1) => MatrixType;
export {};
