import * as util from 'util';

const logMessage = (obj: any): string => {
  console.log(util.inspect(obj, false, null, true));
  return '';
};

export { logMessage };
