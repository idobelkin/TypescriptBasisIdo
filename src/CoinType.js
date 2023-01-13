"use strict";
var coinType;
(function (coinType) {
    coinType[coinType["DOLLAR"] = 0] = "DOLLAR";
    coinType[coinType["EURO"] = 1] = "EURO";
    coinType[coinType["SHEKEL"] = 2] = "SHEKEL";
    coinType[coinType["PESO"] = 3] = "PESO";
    coinType[coinType["POUND"] = 4] = "POUND";
    coinType[coinType["YEN"] = 5] = "YEN";
})(coinType || (coinType = {}));
module.exports = coinType;
