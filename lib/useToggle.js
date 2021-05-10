"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useToggle = void 0;
var vue_demi_1 = require("vue-demi");
var useToggle = function (initialValue) {
    var state = vue_demi_1.ref(initialValue);
    var toggle = function (nextValue) {
        state.value = nextValue !== null && nextValue !== void 0 ? nextValue : !state.value;
    };
    return [state, toggle];
};
exports.useToggle = useToggle;
