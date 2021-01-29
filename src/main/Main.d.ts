import { Canvas } from "./Canvas";
import { Snake } from "./snake/Snake";
import { Arena } from "./arena/Arena";
import { Enemies } from "./enemies/Enemies";
import { Points } from "./points/Points";
import { MergeUnit } from "./mergeUnit/MergeUnit";
import { AnimationFrameUpdate } from "./animationFrameUpdate/AnimationFrameUpdate";
export declare class Main {
    canvas: Canvas;
    arena: Arena;
    enemies: Enemies;
    snake: Snake;
    points: Points;
    mergeUnit: MergeUnit;
    updater: AnimationFrameUpdate;
    constructor();
    pointsHandler: (points: number) => void;
    triggerUpdate: () => void;
    run: () => void;
}
