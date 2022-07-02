export * from './validator';
import util from 'util';
export const logObject = (obj: object, message?: string): void => {
  if (message) {
    console.log(message);
  }
  console.log(util.inspect(obj, { showHidden: false, depth: 2, colors: true }));
};
