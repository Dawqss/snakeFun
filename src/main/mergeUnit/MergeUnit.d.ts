import { Snake } from "../snake/Snake";
import { Arena } from "../arena/Arena";
import { Canvas } from "../Canvas";
import { Enemies } from "../enemies/Enemies";
import { OffsetType } from "../types";
import { Points } from "../points/Points";
export declare class MergeUnit {
    private snake;
    private arena;
    private enemies;
    private canvas;
    private points;
    constructor(snake: Snake, arena: Arena, enemies: Enemies, canvas: Canvas, points: Points);
    updateHandler: () => void;
    updateRecalculateHandler: () => void;
    detectCollision: (snakeOffsets: OffsetType[], enemiesOffsets: OffsetType[]) => void;
}
