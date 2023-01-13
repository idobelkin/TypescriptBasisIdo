var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Charger {
    constructor() {
    }
    getCurrencyValue() {
        let currency = this.inputCoin();
        let p = (this.getCoinValue(currency));
        alert(Promise.resolve(p));
        //return Number(this.getCoinValue(currency));
    }
    getSumInNewCurrency() {
        let currency = this.inputCoin();
        let sum = this.inputSum();
    }
    getCoinValue(currency) {
        return __awaiter(this, void 0, void 0, function* () {
            let list = [];
            let response = yield fetch('CoinValues.txt')
                .then(response => response.text())
                .then(text => {
                list = text.split('\n');
                return this.checkValue(list, currency);
            });
            return response;
        });
    }
    checkValue(list, currency) {
        let splittedArray = list.map((value) => {
            return (value.split(':'));
        });
        return (Number(splittedArray[currency - 1][1]));
    }
    inputCoin() {
        var _a;
        return Number((_a = prompt("Enter coin type")) !== null && _a !== void 0 ? _a : "null");
    }
    inputSum() {
        var _a;
        return Number((_a = prompt("Enter sum")) !== null && _a !== void 0 ? _a : "null");
    }
}
