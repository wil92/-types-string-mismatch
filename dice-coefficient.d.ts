import AlgorithmBase = require("./algorithm");
import Operation = require("./utils/operation");
import {AlgorithmOptions} from "./utils/algorithm-options";

export = DiceCoefficient;

declare class DiceCoefficient implements AlgorithmBase {
    constructor(options?: AlgorithmOptions);

    differences(startText: string, endText: string): Operation[];
    distance(startText: string, endText: string): number;
}
