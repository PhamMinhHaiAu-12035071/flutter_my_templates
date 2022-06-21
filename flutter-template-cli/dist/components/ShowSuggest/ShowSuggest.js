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
const suggestKeywordSlice_1 = require("../../stores/reducers/suggestKeywordSlice");
const react_redux_1 = require("react-redux");
const useAppSelector_1 = require("../../hooks/useAppSelector");
const BoxRow_1 = require("../BoxRow/BoxRow");
const ShowSuggestLoading_1 = require("./ShowSuggestLoading");
const ShowSuggestSuccess_1 = require("./ShowSuggestSuccess");
const childProcess = require('child_process');
const styledWrapperTitleSuggest = {
    paddingLeft: 2,
};
const styledTitleSuggest = {
    color: constants_1.Colors.SYSTEM_GRAY_2,
};
const ShowSuggest = (props) => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const status = (0, useAppSelector_1.useAppSelector)(suggestKeywordSlice_1.selectSuggestKeywordStatus);
    (0, ink_1.useInput)((_input, key) => {
        if (key.tab) {
            const action = (0, suggestKeywordSlice_1.setSuggestKeywordLoading)();
            dispatch(action);
            const arrPath = props.path.split('/');
            const size = arrPath.length;
            if (size >= 2) {
                const name = arrPath[size - 1];
                const relativePath = `${arrPath.slice(0, -1).join('/')}/`;
                const absolutePath = (0, child_process_1.execSync)(`${constants_1.SCRIPT_SHOW_ABSOLUTE_PATH} ${relativePath}`).toString();
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
                        let arrMappingFolders = [];
                        let arrMappingFiles = [];
                        if (arrNameFolder.length > 0) {
                            arrMappingFolders = arrNameFolder.map(item => ({
                                type: constants_1.TYPE_FILE.FOLDER,
                                name: item ?? '',
                            }));
                        }
                        if (arrNameFiles.length > 0) {
                            arrMappingFiles = arrNameFiles.map(item => ({
                                type: constants_1.TYPE_FILE.FILE,
                                name: item ?? '',
                            }));
                        }
                        const action = (0, suggestKeywordSlice_1.setSuggestKeywordSuccess)([...arrMappingFolders, ...arrMappingFiles]);
                        dispatch(action);
                    }
                });
            }
        }
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ink_1.Box, { ...styledWrapperTitleSuggest },
            react_1.default.createElement(ink_1.Text, { ...styledTitleSuggest }, "Press 'Tab' to show suggest folder or file")),
        status === constants_1.Status.LOADING && (react_1.default.createElement(BoxRow_1.BoxRow, null,
            react_1.default.createElement(ShowSuggestLoading_1.ShowSuggestLoading, null))),
        status === constants_1.Status.SUCCESS && (react_1.default.createElement(BoxRow_1.BoxRow, null,
            react_1.default.createElement(ShowSuggestSuccess_1.ShowSuggestSuccess, null)))));
};
exports.ShowSuggest = ShowSuggest;
//# sourceMappingURL=ShowSuggest.js.map