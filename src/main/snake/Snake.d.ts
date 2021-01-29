import { KeyboardArrows, OffsetType } from "../types";
export declare class Snake {
    private updateTriggerHandler;
    lastMove: KeyboardArrows;
    snakeOffsets: OffsetType[];
    eatenEnemiesOffsets: OffsetType[];
    snakeColorIndex: number;
    constructor(updateTriggerHandler: () => void);
    addControlHandlers: () => void;
    recalculate: () => void;
    getOffsets: () => OffsetType[];
    addEatenEnemy: (enemy: OffsetType) => boolean;
    detectIfEnemyChangedToSnakeBody: () => void;
    getMatrix: () => import("../types").MatrixType;
}
