/* eslint-disable @typescript-eslint/no-explicit-any */

export interface ILog {
  log(...data: any[]): void;
  error(...data: any[]): void;
}
