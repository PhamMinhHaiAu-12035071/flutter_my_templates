"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chalkWarning = exports.Colors = void 0;
/**
 * Define color system
 */
const chalk_1 = __importDefault(require("chalk"));
class Colors {
}
exports.Colors = Colors;
Object.defineProperty(Colors, "SYSTEM_RED", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: '#FF453A'
});
Object.defineProperty(Colors, "SYSTEM_YELLOW", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: '#FFD60A'
});
Object.defineProperty(Colors, "SYSTEM_GREEN", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: '#32D74B'
});
Object.defineProperty(Colors, "WHITE", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: '#FFFFFF'
});
const chalkWarning = (text) => chalk_1.default.hex(Colors.SYSTEM_YELLOW).visible(text);
exports.chalkWarning = chalkWarning;
