import { useToggle } from './useToggle';
export var useBoolean = function (initialValue) {
    if (initialValue === void 0) { initialValue = false; }
    var _a = useToggle(initialValue), state = _a[0], toggle = _a[1];
    var setTrue = function () { return toggle(true); };
    var setFalse = function () { return toggle(false); };
    return [state, setTrue, setFalse];
};
