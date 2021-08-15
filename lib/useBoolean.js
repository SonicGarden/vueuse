"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBoolean = void 0;
var vue_demi_1 = require("vue-demi");
var useBoolean = function (initialValue) {
    if (initialValue === void 0) { initialValue = false; }
    var state = vue_demi_1.ref(initialValue);
    var toggle = function (nextValue) {
        state.value = nextValue !== null && nextValue !== void 0 ? nextValue : !state.value;
    };
    var on = function () { return toggle(true); };
    var off = function () { return toggle(false); };
    return [state, { on: on, off: off, toggle: toggle }];
};
exports.useBoolean = useBoolean;
