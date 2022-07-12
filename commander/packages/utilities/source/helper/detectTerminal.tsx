const { execSync } = require("child_process");

const enum TerminalMacOs {
	DEFAULT = 'DEFAULT',
	ITERM = 'ITERM'
}

const detectTerminalMacOS = (): TerminalMacOs => {
	const stdout = execSync("echo $TERM_PROGRAM");
	if(stdout.includes('iTerm.app')) {
		return TerminalMacOs.ITERM;
	}
	return TerminalMacOs.DEFAULT;
}

export {
	detectTerminalMacOS,
	TerminalMacOs
}
