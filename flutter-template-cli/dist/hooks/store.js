"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppDispatch = exports.useTypedSelector = void 0;
const react_redux_1 = require("react-redux");
exports.useTypedSelector = react_redux_1.useSelector;
const useAppDispatch = () => (0, react_redux_1.useDispatch)();
exports.useAppDispatch = useAppDispatch;
