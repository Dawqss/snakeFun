export declare class Points {
    private pointsSubscriber;
    isBadgeShown: boolean;
    points: number;
    container: HTMLElement;
    constructor(pointsSubscriber: (points: number) => void);
    update: () => void;
    addPoints: (pointsToAdd: number) => void;
}
