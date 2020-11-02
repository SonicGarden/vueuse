"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAutosizeTextarea = void 0;
var vue_demi_1 = require("vue-demi");
var core_1 = require("@vueuse/core");
var TEXTAREA_MAX_HEIGHT = 400;
exports.useAutosizeTextarea = function (textarea, maxHeight) {
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
    core_1.useEventListener('input', resize, false, textarea.value);
    // NOTE: To be resized immediately after rendering
    var stop = vue_demi_1.watch(textarea, function () {
        resize();
        stop();
    });
    return resetTextareaSize;
};
