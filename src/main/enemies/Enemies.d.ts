import { OffsetType } from "../types";
export declare class Enemies {
    enemies: OffsetType[];
    getOffsets: () => OffsetType[];
    deleteEnemy: (enemy: OffsetType) => void;
    reloadEnemies: () => void;
}
