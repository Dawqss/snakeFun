export declare type Level = "easy" | "normal" | "hard" | "hardcore";
export declare class AnimationFrameUpdate {
    private updateHandler;
    private moveRecalcHandler;
    level: Level;
    dropCounter: number;
    lastTime: number;
    levelMapToTimeReactionInMs: {
        easy: number;
        normal: number;
        hard: number;
        hardcore: number;
    };
    constructor(updateHandler: Function, moveRecalcHandler: Function);
    update: (time?: number) => void;
    triggerUpdate: () => void;
    setLevel: (level: Level) => void;
}
