


export class Charger{

    constructor()
    {
        
    }
    getCurrencyValue()
    {
        let currency : number = this.inputCoin();
        let p : Promise<Number> = (this.getCoinValue(currency));
        alert(Promise.resolve(p));
        //return Number(this.getCoinValue(currency));
        
    }
    getSumInNewCurrency()
    {
        let currency : number = this.inputCoin();
        let sum : number = this.inputSum();
    }
    async getCoinValue(currency : number) : Promise<Number>
    {
        
        let list : string[] = [];
        let response =  await fetch('CoinValues.txt')
        .then(response => response.text())
        .then(text => {
            list = text.split('\n');
            return this.checkValue(list, currency)});
        return response;
        
        
        
    }
    
    checkValue(list: string[], currency : number) : number
    {
        let splittedArray :  string[][] = list.map((value) => {
            return(value.split(':'));
        });
        return (Number(splittedArray[currency-1][1]));
    }

    
    
    inputCoin() : number
    {
        return Number(prompt("Enter coin type") ?? "null");
    }

    inputSum() : number
    {
        return Number(prompt("Enter sum") ?? "null");
    }

    
}


