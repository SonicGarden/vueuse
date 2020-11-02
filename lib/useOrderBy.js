"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOrderBy = void 0;
var vue_demi_1 = require("vue-demi");
var lodash_orderby_1 = __importDefault(require("lodash.orderby"));
exports.useOrderBy = function (collection, iteratees, orders) {
    return vue_demi_1.computed(function () { return lodash_orderby_1.default(collection.value, iteratees, orders); });
};
