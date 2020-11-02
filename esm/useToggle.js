import { ref } from 'vue-demi';
export var useToggle = function (initialValue) {
    var state = ref(initialValue);
    var toggle = function (nextValue) {
        state.value = nextValue !== null && nextValue !== void 0 ? nextValue : !state.value;
    };
    return [state, toggle];
};
