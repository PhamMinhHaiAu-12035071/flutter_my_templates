"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxRow = void 0;
const ink_1 = require("ink");
const react_1 = __importDefault(require("react"));
const styledContainer = {
    marginTop: 1,
};
const BoxRow = (props) => {
    return react_1.default.createElement(ink_1.Box, { ...styledContainer }, props.children);
};
exports.BoxRow = BoxRow;
