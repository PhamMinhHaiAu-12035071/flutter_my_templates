"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
const react_1 = __importDefault(require("react"));
const ink_1 = require("ink");
const lodash_1 = __importDefault(require("lodash"));
const constants_1 = require("../../../constants");
const chalk_1 = __importDefault(require("chalk"));
/**
 * Render string text from image asset
 * @param imageProps
 */
const loadStringFromImage = async (imageProps) => {
    const { default: terminalImage } = await import('terminal-image');
    const result = await terminalImage.file(imageProps.path, imageProps.options);
    return Promise.resolve(result);
};
const aspectRatioBetweenSpaceAndPoint = 3;
const convertSizeToSpace = (point) => {
    return chalk_1.default.bgBlack(lodash_1.default.repeat(constants_1.SPACE_CHARACTER, point * aspectRatioBetweenSpaceAndPoint));
};
const Image = (props) => {
    const [imageStr, setImageStr] = react_1.default.useState('');
    react_1.default.useEffect(() => {
        loadStringFromImage(props).then(str => setImageStr(str));
    }, [props]);
    if (imageStr) {
        return (react_1.default.createElement(ImageLayout, { ...props },
            react_1.default.createElement(ImageView, { str: imageStr })));
    }
    return null;
};
exports.Image = Image;
const ImageLayout = ({ marginTop = 0, marginBottom = 0, marginLeft = 0, marginRight = 0, children, }) => {
    return (react_1.default.createElement(ink_1.Box, { ...displayColumn },
        marginTop > 0 && react_1.default.createElement(ink_1.Box, { height: marginTop }),
        react_1.default.createElement(ink_1.Box, { ...displayRow },
            react_1.default.createElement(ink_1.Box, { width: 5 }),
            react_1.default.createElement(ink_1.Text, null, children)),
        marginBottom > 0 && react_1.default.createElement(ink_1.Box, { height: marginBottom })));
};
const ImageView = (props) => {
    return react_1.default.createElement(ink_1.Text, null, props.str);
};
/**
 * Define style
 */
const displayColumn = {
    flexDirection: 'column',
};
const displayRow = {
    flexDirection: 'row',
};
//# sourceMappingURL=Image.js.map