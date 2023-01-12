"use strict";
//let arr : number[] = input();
///alert("the result: " + sortList(arr).toString());
let arr0 = input();
let arr1 = sortList(arr0);
alert("" + arr1.toString());
function input() {
    var _a;
    let input = (_a = prompt("Enter number, -1 to stop")) !== null && _a !== void 0 ? _a : "null";
    let toReturn = input.split(',').map((item) => {
        return parseInt(item);
    });
    return toReturn;
}
function getAverage(list) {
    let toReturn = list.reduce((accumulator, value) => {
        return accumulator += value;
    });
    return (toReturn / list.length);
}
function getAmmoutOfPositive(list) {
    let toReturn = list.filter((value) => {
        if (value > 0)
            return value;
    });
    return toReturn.length;
}
function sortList(list) {
    return list.sort((a, b) => a - b);
}
