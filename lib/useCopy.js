"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCopy = void 0;
var clipboard_copy_1 = __importDefault(require("clipboard-copy"));
var useCopy = function (text, onSuccess) {
    return function () {
        clipboard_copy_1.default(text.value);
        if (onSuccess) {
            onSuccess();
        }
    };
};
exports.useCopy = useCopy;
