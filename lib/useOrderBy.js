"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOrderBy = void 0;
var vue_demi_1 = require("vue-demi");
var lodash_orderby_1 = __importDefault(require("lodash.orderby"));
var useOrderBy = function (collection, iteratees, orders) {
    return (0, vue_demi_1.computed)(function () { return (0, lodash_orderby_1.default)(collection.value, iteratees, orders); });
};
exports.useOrderBy = useOrderBy;
