import * as fs from 'fs';

export class Charger{

    constructor()
    {
        
    }
    getCoinValue() : string
    {
        let coinType : string = this.inputCoin();
        let st : string = fs.readFileSync('CoinValues.txt', 'utf8');
        return st;
        //return cv.getValue(coinType)  
    }

    inputCoin() : string
    {
        return prompt("Enter coin type") ?? "null";
    }

    
}


