import osName from 'os-name';
import shell from 'shelljs';
import os from 'node:os';

const enum Chip {
  Intel = 'Intel',
  M1 = 'M1',
}

const enum OperatingSystem {
  Mac = 'Mac',
  Linux = 'Linux',
  Window = 'Window',
  Unknown = 'Unknown',
}

interface OS {
  name: OperatingSystem;
  fullName: string;
}
const detectOSInformation = (): OS => {
  return {
    name: detectOperatingSystem(),
    fullName: osName(),
  };
};

const detectOperatingSystem = (): OperatingSystem => {
  const opSys: NodeJS.Platform = os.platform();
  if (opSys === 'darwin') {
    return OperatingSystem.Mac;
  } else if (opSys === 'win32') {
    return OperatingSystem.Window;
  } else if (opSys === 'linux') {
    return OperatingSystem.Linux;
  }
  return OperatingSystem.Unknown;
};
const detectChip = (): Chip => {
  const result = shell.exec('sysctl -n machdep.cpu.brand_string', {
    silent: true,
  }).stdout;
  if (result.includes('M1')) {
    return Chip.M1;
  }
  return Chip.Intel;
};
export {
  detectOSInformation,
  detectChip,
  Chip,
  detectOperatingSystem,
  OperatingSystem,
};

export type { OS };
