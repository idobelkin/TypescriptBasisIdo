var arr = input();
///alert("the result: " + sortList(arr).toString());
var arr0 = [1, 222, 33, 44, 5];
var arr1 = sortList(arr0);
alert("" + arr1.toString());
function input() {
    var _a;
    var input = (_a = prompt("Enter number, -1 to stop")) !== null && _a !== void 0 ? _a : "null";
    var toReturn = input.split(',').map(function (item) {
        return parseInt(item);
    });
    return toReturn;
}
function getAverage(list) {
    var toReturn = list.reduce(function (accumulator, value) {
        return accumulator += value;
    });
    return (toReturn / list.length);
}
function getAmmoutOfPositive(list) {
    var toReturn = list.filter(function (value) {
        if (value > 0)
            return value;
    });
    return toReturn.length;
}
function sortList(list) {
    return list.sort();
}
