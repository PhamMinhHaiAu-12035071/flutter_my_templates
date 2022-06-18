"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowProgressTable = void 0;
const useAppSelector_1 = require("../../hooks/useAppSelector");
const copyZipSlice_1 = require("../../stores/reducers/copyZipSlice");
const ink_table_1 = __importDefault(require("ink-table"));
const react_1 = __importDefault(require("react"));
const BoxRow_1 = require("../BoxRow/BoxRow");
const lodash_1 = __importDefault(require("lodash"));
const ShowProgressTable = () => {
    const progress = (0, useAppSelector_1.useAppSelector)(copyZipSlice_1.selectProgressCopyZipFlutter);
    if (progress.length > 0) {
        return (react_1.default.createElement(BoxRow_1.BoxRow, null,
            react_1.default.createElement(ink_table_1.default, { data: progress.map(item => {
                    return lodash_1.default.merge(item, {
                        Progress: item['Progress'] + '%',
                        'Total Size': item['Total Size'] + 'Bytes',
                    });
                }) })));
    }
    return null;
};
exports.ShowProgressTable = ShowProgressTable;
