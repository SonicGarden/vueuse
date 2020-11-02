"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBoolean = void 0;
var useToggle_1 = require("./useToggle");
exports.useBoolean = function (initialValue) {
    if (initialValue === void 0) { initialValue = false; }
    var _a = useToggle_1.useToggle(initialValue), state = _a[0], toggle = _a[1];
    var setTrue = function () { return toggle(true); };
    var setFalse = function () { return toggle(false); };
    return [state, setTrue, setFalse];
};
