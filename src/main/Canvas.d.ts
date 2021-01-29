import { MatrixType, OffsetType } from "./types";
export declare class Canvas {
    canvas: HTMLCanvasElement | null;
    context: CanvasRenderingContext2D | null;
    constructor(canvasId: string);
    drawMatrix: (matrix: MatrixType, offset?: OffsetType) => void;
}
