import _ from 'lodash';

const Rsync = require('rsync');

export interface RsyncCallback {
  onDone?: (error: never, code: never, cmd: never) => void;
  onProgress?: (data: RsyncProgressData | undefined) => void;
  onError?: (data: never) => void;
}

export interface RsyncProgressData {
  'Total Size': string; // unit bytes
  Progress: string;
  'Speed Up': string;
  'Estimate Time': string;
}

export class RsyncService {
  private static instance: RsyncService;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance(): RsyncService {
    if (!RsyncService.instance) {
      RsyncService.instance = new RsyncService();
    }

    return RsyncService.instance;
  }

  public validateProgressData(
    first: string,
    second: string,
    third: string,
    fourth: string
  ): boolean {
    const conditionFirst = /^\d+$/gm.test(first);
    const conditionSecond = second.charAt(second.length - 1) !== '%';
    const conditionThird =
      third.charAt(third.length - 1) !== 's' || third.charAt(third.length - 2) !== '/';
    const conditionFourth = /\d\d:\d\d$/gm.test(fourth);
    return !(!conditionFirst || conditionSecond || conditionThird || !conditionFourth);
  }
  public parseProgressData(data: string): RsyncProgressData | undefined {
    const arr = _.compact(data.split(/\s+/));
    if (arr.length >= 4) {
      const first = arr[0];
      const second = arr[1];
      const third = arr[2];
      const fourth = arr[3];
      if (
        first !== undefined &&
        second !== undefined &&
        third !== undefined &&
        fourth !== undefined
      ) {
        const checked = RsyncService.getInstance().validateProgressData(
          first,
          second,
          third,
          fourth
        );
        if (checked) {
          return {
            'Total Size': `${parseInt(first)} Bytes`,
            Progress: `${parseInt(second)}%`,
            'Speed Up': third,
            'Estimate Time': fourth,
          };
        }
      }
    }
    return undefined;
  }
  public copyFile(source: string, destination: string, rsyncCallback?: RsyncCallback): void {
    // Build the command
    const rsync = new Rsync()
      .shell('ssh')
      .flags('azv')
      .progress()
      .source(source)
      .destination(destination);

    // Execute the command
    rsync.execute(
      function (error: never, code: never, cmd: never) {
        if (rsyncCallback?.onDone !== undefined) {
          rsyncCallback.onDone(error, code, cmd);
        }
      },

      function (data: never) {
        if (rsyncCallback?.onProgress !== undefined) {
          const output = String.fromCharCode.apply(null, data);
          const result = RsyncService.getInstance().parseProgressData(output);
          rsyncCallback.onProgress(result);
        }
      },
      function (data: never) {
        if (rsyncCallback?.onError !== undefined) {
          rsyncCallback.onError(data);
        }
      }
    );
  }
}
