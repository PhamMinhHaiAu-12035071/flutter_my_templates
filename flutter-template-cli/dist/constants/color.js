"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chalkWarning = exports.Color = void 0;
/**
 * Define color system
 */
const chalk_1 = __importDefault(require("chalk"));
class Color {
}
exports.Color = Color;
Object.defineProperty(Color, "SYSTEM_RED", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: '#FF453A'
});
Object.defineProperty(Color, "SYSTEM_YELLOW", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: '#FFD60A'
});
Object.defineProperty(Color, "WHITE", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: '#FFFFFF'
});
const chalkWarning = (text) => chalk_1.default.hex(Color.SYSTEM_YELLOW).visible(text);
exports.chalkWarning = chalkWarning;
