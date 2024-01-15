import {ILog} from './interface';

export const logger: ILog = {
  log(...data) {
    console.log(...data);
  },
  error(...data) {
    console.error(...data);
  },
};
