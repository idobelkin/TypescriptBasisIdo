import * as fs from 'fs';
export class Charger {
    constructor() {
    }
    getCoinValue() {
        let coinType = this.inputCoin();
        let st = fs.readFileSync('CoinValues.txt', 'utf8');
        return st;
        //return cv.getValue(coinType)  
    }
    inputCoin() {
        var _a;
        return (_a = prompt("Enter coin type")) !== null && _a !== void 0 ? _a : "null";
    }
}
