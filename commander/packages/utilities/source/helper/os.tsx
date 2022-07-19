import osName from 'os-name';
import shell from 'shelljs';

const enum Chip {
	Intel = 'Intel',
	M1 = 'M1',
}
const detectOS = (): string => {
	return osName();
};

const detectChip = (): Chip => {
	const result = shell.exec('sysctl -n machdep.cpu.brand_string', {silent: true}).stdout;
	if(result.includes('M1')) {
		return Chip.M1;
	}
	return Chip.Intel;

};
export {
	detectOS,
	detectChip
};
