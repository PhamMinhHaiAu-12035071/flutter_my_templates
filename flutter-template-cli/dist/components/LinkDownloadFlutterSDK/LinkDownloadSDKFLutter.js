"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkDownloadSDKFlutter = void 0;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
const ink_1 = require("ink");
const react_1 = __importDefault(require("react"));
const ink_link_1 = __importDefault(require("ink-link"));
const constants_1 = require("../../constants");
const lodash_1 = __importDefault(require("lodash"));
const styledText = {
    color: 'white',
};
const styledTextLink = {
    color: constants_1.Colors.SYSTEM_BLUE,
};
const LinkDownloadSDKFlutter = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_1.Text, { ...styledText }, "You have not yet downloaded Flutter SDK?"),
        react_1.default.createElement(ink_1.Newline, null),
        react_1.default.createElement(ink_1.Text, { ...styledText },
            'Please download flutter SDK in here:' + lodash_1.default.repeat(constants_1.SPACE_CHARACTER, 2),
            react_1.default.createElement(ink_link_1.default, { url: "https://docs.flutter.dev/get-started/install/macos" },
                react_1.default.createElement(ink_1.Text, { ...styledTextLink }, "https://docs.flutter.dev/get-started/install/macos"))),
        react_1.default.createElement(ink_1.Newline, null)));
};
exports.LinkDownloadSDKFlutter = LinkDownloadSDKFlutter;
//# sourceMappingURL=LinkDownloadSDKFLutter.js.map