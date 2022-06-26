"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowSuggestContainer = void 0;
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const constants_1 = require("../../constants");
const child_process_1 = require("child_process");
const uuid_1 = require("uuid");
const lodash_1 = __importDefault(require("lodash"));
const suggestKeywordSlice_1 = require("../../stores/reducers/suggestKeywordSlice");
const react_redux_1 = require("react-redux");
const useAppSelector_1 = require("../../hooks/useAppSelector");
const ShowSuggest_1 = require("./ShowSuggest");
const pathSlice_1 = require("../../stores/reducers/pathSlice");
const childProcess = require('child_process');
const ShowSuggestContainer = (props) => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const status = (0, useAppSelector_1.useAppSelector)(suggestKeywordSlice_1.selectSuggestKeywordStatus);
    const data = (0, useAppSelector_1.useAppSelector)(suggestKeywordSlice_1.selectSuggestKeywordData);
    const currentPath = (0, useAppSelector_1.useAppSelector)(suggestKeywordSlice_1.selectSuggestKeywordCurrentPath);
    (0, ink_1.useInput)((_input, key) => {
        if (key.tab &&
            props.path.length >= 1 &&
            props.status !== pathSlice_1.StatusPathCombine.ERROR &&
            props.status !== pathSlice_1.StatusPathCombine.ERROR_KEYDOWN) {
            if (props.path !== currentPath) {
                _showSuggest();
            }
            else {
                const action = (0, suggestKeywordSlice_1.setSuggestKeywordChooseTab)();
                dispatch(action);
            }
        }
    });
    const _showSuggest = () => {
        const action = (0, suggestKeywordSlice_1.setSuggestKeywordLoading)(props.path);
        setTimeout(() => {
            dispatch(action);
        }, 0);
        const arrPath = lodash_1.default.chain(props.path).padEnd(2, '/').split('/').value();
        const size = arrPath.length;
        const name = arrPath[size - 1];
        const relativePath = `${arrPath.slice(0, -1).join('/')}/`;
        const absolutePath = (0, child_process_1.execSync)(`${constants_1.SCRIPT_SHOW_ABSOLUTE_PATH} ${relativePath}`).toString();
        const regexAbsolutePath = new RegExp('(:?\\/.|\\/)$', 'gm');
        const formatAbsolutePath = absolutePath.replace(regexAbsolutePath, '');
        const generateUid = (0, uuid_1.v4)();
        const subProcess = childProcess.exec(`${constants_1.SCRIPT_SHOW_FOLDER_AND_FILE_ZIP} NAME="${name}" ABSOLUTE_PATH="${formatAbsolutePath}" UUID=${generateUid}`);
        subProcess.stdout.on('data', (data) => _onData(data, generateUid));
    };
    const _onData = (data, id) => {
        if (typeof data === 'string') {
            const [directories, files] = data.split(id);
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
                    id: (0, uuid_1.v4)(),
                    type: constants_1.TYPE_FILE.FOLDER,
                    name: item ?? '',
                    isActive: false,
                }));
            }
            if (arrNameFiles.length > 0) {
                arrMappingFiles = arrNameFiles.map(item => ({
                    id: (0, uuid_1.v4)(),
                    type: constants_1.TYPE_FILE.FILE,
                    name: item ?? '',
                    isActive: false,
                }));
            }
            const action = (0, suggestKeywordSlice_1.setSuggestKeywordSuccess)([...arrMappingFolders, ...arrMappingFiles]);
            setTimeout(() => {
                dispatch(action);
            }, constants_1.DELAY_SUGGEST_KEYWORD);
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ShowSuggest_1.ShowSuggest, { status: status, data: data })));
};
exports.ShowSuggestContainer = ShowSuggestContainer;
//# sourceMappingURL=ShowSuggestContainer.js.map