import Operation = require("./utils/operation");

export = AlgorithmBase;

declare interface AlgorithmBase {
    differences(startText: string, endText: string): Operation[];
    distance(startText: string, endText: string): number;
}
