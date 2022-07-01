"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowSuggestSuccess = void 0;
const ink_1 = require("ink");
const react_1 = __importDefault(require("react"));
const lodash_1 = __importDefault(require("lodash"));
const ItemShowSuggestSuccess_1 = require("./ItemShowSuggestSuccess");
const styledColumnItem = {
    flexDirection: 'column',
    marginLeft: 2,
};
const styledMarginTop = {
    marginTop: 1,
};
const styledRowItem = {
    flexDirection: 'row',
};
const numberOfColumns = 2;
const ShowSuggestSuccess = (props) => {
    const [arr, setArr] = react_1.default.useState([]);
    react_1.default.useEffect(() => {
        if (props.data.length > 0) {
            const numberOfRows = Math.ceil(props.data.length / numberOfColumns);
            const newArr = lodash_1.default.chain(props.data).chunk(numberOfRows).value();
            setArr(newArr);
        }
    }, [props]);
    return (react_1.default.createElement(react_1.default.Fragment, null, arr.map((row, index) => {
        return (react_1.default.createElement(ink_1.Box, { key: index.toString(), ...styledColumnItem }, row.map((item, index) => {
            const marginTop = index !== 0 ? styledMarginTop : {};
            const styledContainer = { ...styledRowItem, ...marginTop };
            return (react_1.default.createElement(ink_1.Box, { ...styledContainer, key: item.id },
                react_1.default.createElement(ItemShowSuggestSuccess_1.ItemShowSuggestSuccess, { ...item })));
        })));
    })));
};
exports.ShowSuggestSuccess = ShowSuggestSuccess;
//# sourceMappingURL=ShowSuggestSuccess.js.map