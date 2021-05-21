import { Player } from "./player.model";

export interface Group {
    groupScoreAvg: number;
    successProbability: boolean;
    players: Player[];
}