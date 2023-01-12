
import {Charger} from './Charger.js';
//let c : Charger = new Charger();
alert("21355");



function input() : number[]
{
    
    let input : string = prompt("Enter number, -1 to stop") ?? "null";
    let toReturn : number[] = input.split(',').map((item) => {
        return parseInt(item);
    });
    
    return toReturn;
    
}

function getAverage(list : Array<number>) : number{

    let toReturn : number = list.reduce((accumulator : number, value: number) : number =>{
        return accumulator += value;
    });
    return (toReturn/list.length);
}

function getAmmoutOfPositive(list : Array<number>) : number{

    let toReturn : Array<number> = list.filter((value) => {
        if(value > 0)
            return value;
    })
    return toReturn.length;
}

function sortList(list : number[]) : number[]{

    
    return list.sort((a : number,b : number) => a-b);

}