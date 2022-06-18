"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppSelector = void 0;
const react_1 = __importDefault(require("react"));
const stores_1 = require("../stores");
const react_redux_1 = require("react-redux");
function useAppSelector(funcSelector) {
    const selector = (0, react_redux_1.useSelector)(funcSelector);
    const [, forceUpdate] = react_1.default.useReducer(x => x + 1, 0);
    react_1.default.useEffect(() => {
        const unsubscribe = stores_1.store.subscribe(() => {
            forceUpdate();
        });
        return () => {
            unsubscribe();
        };
    }, []);
    return selector;
}
exports.useAppSelector = useAppSelector;
