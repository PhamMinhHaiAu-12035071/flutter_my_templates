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
    const dataActive = (0, useAppSelector_1.useAppSelector)(suggestKeywordSlice_1.selectSuggestKeywordActiveData);
    react_1.default.useMemo(() => {
        if (dataActive !== undefined) {
            const backslashCharacter = dataActive.type === constants_1.TYPE_FILE.FOLDER ? '/' : '';
            const value = `${dataActive.relativePath}${dataActive.name}${backslashCharacter}`;
            const action = (0, pathSlice_1.setPathAutocomplete)(value);
            setTimeout(() => {
                dispatch(action);
                const actionSuggestCurrentPath = (0, suggestKeywordSlice_1.setCurrentPath)(value);
                dispatch(actionSuggestCurrentPath);
            }, constants_1.ZERO_DELAY);
        }
    }, [dataActive]);
    (0, ink_1.useInput)((_, key) => {
        if (key.return && props.status === pathSlice_1.StatusPathCombine.AUTOCOMPLETE) {
            const action = (0, pathSlice_1.setStatusKeyDown)();
            dispatch(action);
            const actionInitiatedSuggest = (0, suggestKeywordSlice_1.setInitialData)();
            dispatch(actionInitiatedSuggest);
        }
        if (key.tab &&
            props.path.length >= 1 &&
            props.status !== pathSlice_1.StatusPathCombine.ERROR &&
            props.status !== pathSlice_1.StatusPathCombine.ERROR_KEYDOWN) {
            if (props.path !== currentPath) {
                _showSuggest();
            }
            else {
                if (status !== suggestKeywordSlice_1.SuggestKeywordStatus.EMPTY_DATA) {
                    const action = (0, suggestKeywordSlice_1.setSuggestKeywordChooseTab)();
                    dispatch(action);
                }
            }
        }
    });
    const _showSuggest = () => {
        const action = (0, suggestKeywordSlice_1.setSuggestKeywordLoading)(props.path);
        dispatch(action);
        const arrPath = lodash_1.default.chain(props.path).padEnd(2, '/').split('/').value();
        const size = arrPath.length;
        const name = arrPath[size - 1];
        const relativePath = `${arrPath.slice(0, -1).join('/')}/`;
        const absolutePath = (0, child_process_1.execSync)(`${constants_1.SCRIPT_SHOW_ABSOLUTE_PATH} ${relativePath}`).toString();
        const regexAbsolutePath = new RegExp('(:?\\/.|\\/)$', 'gm');
        const formatAbsolutePath = absolutePath.replace(regexAbsolutePath, '');
        const generateUid = (0, uuid_1.v4)();
        const subProcess = childProcess.exec(`${constants_1.SCRIPT_SHOW_FOLDER_AND_FILE_ZIP} NAME="${name}" ABSOLUTE_PATH="${formatAbsolutePath}" UUID=${generateUid}`);
        subProcess.stdout.on('data', (data) => _onData(data, generateUid, relativePath, formatAbsolutePath));
    };
    const _onData = (data, id, relativePath, absolutePath) => {
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
                    relativePath: relativePath,
                    absolutePath: absolutePath,
                }));
            }
            if (arrNameFiles.length > 0) {
                arrMappingFiles = arrNameFiles.map(item => ({
                    id: (0, uuid_1.v4)(),
                    type: constants_1.TYPE_FILE.FILE,
                    name: item ?? '',
                    isActive: false,
                    relativePath: relativePath,
                    absolutePath: absolutePath,
                }));
            }
            const action = (0, suggestKeywordSlice_1.setSuggestKeywordSuccess)([...arrMappingFolders, ...arrMappingFiles]);
            dispatch(action);
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ShowSuggest_1.ShowSuggest, { status: status, data: data })));
};
exports.ShowSuggestContainer = ShowSuggestContainer;
//# sourceMappingURL=ShowSuggestContainer.js.map