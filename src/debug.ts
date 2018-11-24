import * as Debug from 'debug';
const debug = Debug('bon voyage');

export const log = (msg: string) => {
  debug(msg);
};
