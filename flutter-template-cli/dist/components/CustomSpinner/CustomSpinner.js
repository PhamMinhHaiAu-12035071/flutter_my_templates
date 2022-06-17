"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSpinner = void 0;
const react_1 = __importStar(require("react"));
const ink_1 = require("ink");
const chalk_1 = __importDefault(require("chalk"));
const constants_1 = require("../../constants");
const lodash_1 = __importDefault(require("lodash"));
const CustomSpinner = ({ spinner, colorSpinner = constants_1.Colors.WHITE, text = '', colorText = constants_1.Colors.WHITE, }) => {
    const [frameIndex, setFrameIndex] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        const timer = setInterval(() => {
            setFrameIndex(currentFrameIndex => {
                const isLastFrame = currentFrameIndex === spinner.frames.length - 1;
                return isLastFrame ? 0 : currentFrameIndex + 1;
            });
        }, spinner.interval);
        return () => {
            clearInterval(timer);
        };
    }, [spinner]);
    return (react_1.default.createElement(ink_1.Text, null,
        react_1.default.createElement(react_1.default.Fragment, null,
            chalk_1.default.hex(colorSpinner).visible(spinner.frames[frameIndex]),
            lodash_1.default.isString(text) ? react_1.default.createElement(ink_1.Text, { color: colorText }, text) : text)));
};
exports.CustomSpinner = CustomSpinner;
