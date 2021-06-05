import DiceCoefficient = require("../dice-coefficient");
import Operation = require("../utils/operation");

const greedyInstanceWithoutOptions = new DiceCoefficient();
const greedyInstanceWithOptions = new DiceCoefficient({ignoreCase: true, ignoreSpaces: true, precision: 5});

greedyInstanceWithoutOptions.distance('some', 'some1');

const operations: Operation[] = greedyInstanceWithOptions.differences('some', 'some1');

for (let op of operations) {
    console.log(op.type, op.value);
}
