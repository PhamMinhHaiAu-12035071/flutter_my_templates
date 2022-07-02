"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowProgressUnzip = void 0;
const useAppSelector_1 = require("../../hooks/useAppSelector");
const unzipSlice_1 = require("../../stores/reducers/unzipSlice");
const ink_table_1 = __importDefault(require("ink-table"));
const lodash_1 = __importDefault(require("lodash"));
const react_1 = __importDefault(require("react"));
const moment_1 = __importDefault(require("moment"));
const ShowProgressUnzip = () => {
    const progress = (0, useAppSelector_1.useAppSelector)(unzipSlice_1.selectUnzipProgress);
    if (progress.length > 0) {
        return (react_1.default.createElement(ink_table_1.default, { data: progress.map(item => {
                return {
                    'Total Size': `${item.transferred} Bytes`,
                    Progress: `${lodash_1.default.round(item.percentage)}%`,
                    'Speed Up': `${lodash_1.default.round(item.speed * Math.pow(10, -6), 2)} MB/s`,
                    'Estimate time': `${(0, moment_1.default)()
                        .hour(0)
                        .minute(0)
                        .second(0)
                        .add(item.eta, 'seconds')
                        .format('HH:mm:ss')}`,
                };
            }) }));
    }
    return null;
};
exports.ShowProgressUnzip = ShowProgressUnzip;
//# sourceMappingURL=ShowProgressUnzip.js.map