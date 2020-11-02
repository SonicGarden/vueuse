import { watch } from 'vue-demi';
import { useEventListener } from '@vueuse/core';
var TEXTAREA_MAX_HEIGHT = 400;
export var useAutosizeTextarea = function (textarea, maxHeight) {
    if (maxHeight === void 0) { maxHeight = TEXTAREA_MAX_HEIGHT; }
    var resize = function () {
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
    var resetTextareaSize = function () {
        if (textarea.value) {
            // eslint-disable-next-line no-param-reassign
            textarea.value.style.minHeight = '';
        }
    };
    useEventListener('input', resize, false, textarea.value);
    // NOTE: To be resized immediately after rendering
    var stop = watch(textarea, function () {
        resize();
        stop();
    });
    return resetTextareaSize;
};
