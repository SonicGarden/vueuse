import { ref } from 'vue-demi';
export var useBoolean = function (initialValue) {
    if (initialValue === void 0) { initialValue = false; }
    var state = ref(initialValue);
    var toggle = function (nextValue) {
        state.value = nextValue !== null && nextValue !== void 0 ? nextValue : !state.value;
    };
    var on = function () { return toggle(true); };
    var off = function () { return toggle(false); };
    return [state, { on: on, off: off, toggle: toggle }];
};
