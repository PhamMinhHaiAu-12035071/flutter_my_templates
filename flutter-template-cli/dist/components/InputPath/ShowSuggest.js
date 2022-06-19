"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowSuggest = void 0;
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const constants_1 = require("../../constants");
const child_process_1 = require("child_process");
const uuid_1 = require("uuid");
const lodash_1 = __importDefault(require("lodash"));
const childProcess = require('child_process');
// const shell = require('shelljs');
const styledWrapperTitleSuggest = {
    paddingLeft: 2,
};
const styledTitleSuggest = {
    color: constants_1.Colors.SYSTEM_GRAY_2,
};
const ShowSuggest = (props) => {
    (0, ink_1.useInput)((_input, key) => {
        if (key.tab) {
            const arrPath = props.path.split('/');
            const size = arrPath.length;
            if (size >= 2) {
                const name = arrPath[size - 1];
                const relativePath = `${arrPath.slice(0, -1).join('/')}/`;
                const absolutePath = (0, child_process_1.execSync)(`${constants_1.SCRIPT_SHOW_ABSOLUTE_PATH} ${relativePath}`).toString();
                console.log(`[useInput] you press tab ${arrPath} ${absolutePath}`);
                const generateUid = (0, uuid_1.v4)();
                const subProcess = childProcess.exec(`${constants_1.SCRIPT_SHOW_FOLDER_AND_FILE_ZIP} NAME="${name}" ABSOLUTE_PATH="${absolutePath}" UUID=${generateUid}`);
                subProcess.stdout.on('data', (data) => {
                    if (typeof data === 'string') {
                        const [directories, files] = data.split(generateUid);
                        let arrNameFolder = [];
                        let arrNameFiles = [];
                        if (directories) {
                            arrNameFolder = lodash_1.default.compact(directories.split('\n').map((item) => {
                                const arr = item.split('/');
                                return arr[arr.length - 1];
                            }));
                        }
                        if (files) {
                            arrNameFiles = lodash_1.default.compact(files.split('\n').map((item) => {
                                const arr = item.split('/');
                                return arr[arr.length - 1];
                            }));
                        }
                        console.log(`show suggest directory: ${JSON.stringify(arrNameFolder)} file: ${JSON.stringify(arrNameFiles)}`);
                    }
                });
            }
        }
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_1.Box, { ...styledWrapperTitleSuggest },
            react_1.default.createElement(ink_1.Text, { ...styledTitleSuggest }, "Press 'Tab' to show suggest folder or file"))));
};
exports.ShowSuggest = ShowSuggest;
//# sourceMappingURL=ShowSuggest.js.map