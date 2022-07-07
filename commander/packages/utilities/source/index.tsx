import {detectTerminalMacOS, TerminalMacOs} from "./helper/detectTerminal";


const Utilities = {
	TerminalMacOs: TerminalMacOs,
	detectTerminalMacOS: detectTerminalMacOS,
}

export * from "./helper/detectTerminal";
module.exports = Utilities;
export default Utilities;
