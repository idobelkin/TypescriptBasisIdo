//let arr : number[] = input();
///alert("the result: " + sortList(arr).toString());
let arr0 : number[] = input();
let arr1 : number[] = sortList(arr0);
alert(""+arr1.toString());

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