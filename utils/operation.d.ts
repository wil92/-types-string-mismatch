import OperationType = require("./operation-type");

export = Operation;

declare interface Operation {
    type: OperationType;
    value: string;
}
