"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAutosizeTextarea = void 0;
var vue_demi_1 = require("vue-demi");
var TEXTAREA_MAX_HEIGHT = 400;
exports.useAutosizeTextarea = function (textarea, maxHeight) {
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
    vue_demi_1.onMounted(function () {
        var _a;
        (_a = textarea.value) === null || _a === void 0 ? void 0 : _a.addEventListener('input', fitToContent);
    });
    vue_demi_1.onUnmounted(function () {
        var _a;
        (_a = textarea.value) === null || _a === void 0 ? void 0 : _a.removeEventListener('input', fitToContent);
    });
    // NOTE: To be resized immediately after rendering
    var stop = vue_demi_1.watch(textarea, function () {
        fitToContent();
        stop();
    });
    var resize = function () {
        reset();
        fitToContent();
    };
    return { resize: resize, reset: reset };
};
