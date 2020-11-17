import { onMounted, onUnmounted, watch } from 'vue-demi';
var TEXTAREA_MAX_HEIGHT = 400;
export var useAutosizeTextarea = function (textarea, maxHeight) {
    if (maxHeight === void 0) { maxHeight = TEXTAREA_MAX_HEIGHT; }
    var fitToContent = function () {
        if (!textarea.value)
            return;
        var adjustedHeight = textarea.value.clientHeight;
        if (maxHeight > adjustedHeight) {
            adjustedHeight = Math.max(textarea.value.scrollHeight, adjustedHeight);
            adjustedHeight = Math.min(maxHeight, adjustedHeight);
            if (adjustedHeight > textarea.value.clientHeight) {
                // eslint-disable-next-line no-param-reassign
                textarea.value.style.minHeight = adjustedHeight + "px";
            }
        }
    };
    var reset = function () {
        if (textarea.value) {
            // eslint-disable-next-line no-param-reassign
            textarea.value.style.minHeight = '';
        }
    };
    onMounted(function () {
        var _a;
        (_a = textarea.value) === null || _a === void 0 ? void 0 : _a.addEventListener('input', fitToContent);
    });
    onUnmounted(function () {
        var _a;
        (_a = textarea.value) === null || _a === void 0 ? void 0 : _a.removeEventListener('input', fitToContent);
    });
    // NOTE: To be resized immediately after rendering
    var stop = watch(textarea, function () {
        fitToContent();
        stop();
    });
    var resize = function () {
        reset();
        fitToContent();
    };
    return { resize: resize, reset: reset };
};
