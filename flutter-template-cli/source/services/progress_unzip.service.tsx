import progress, { Progress } from 'progress-stream';
import fs from 'fs';
import unzipper from 'unzipper';

export interface ProgressCallback {
  onDone?: () => void;
  onProgress?: (progress: Progress) => void;
  onError?: (e: never) => void;
}
export class ProgressUnzipService {
  private static instance: ProgressUnzipService;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  public static getInstance(): ProgressUnzipService {
    if (!ProgressUnzipService.instance) {
      ProgressUnzipService.instance = new ProgressUnzipService();
    }

    return ProgressUnzipService.instance;
  }

  public unzipFile(source: string, destination: string, callback?: ProgressCallback): void {
    const stat = fs.statSync(source);
    const _progress = progress(
      {
        length: stat.size,
        time: 1500 /* ms */,
      },
      function (progress: Progress) {
        if (callback?.onProgress !== undefined) {
          callback.onProgress(progress);
        }
      }
    );

    fs.createReadStream(source)
      .pipe(_progress)
      .pipe(unzipper.Extract({ path: destination, concurrency: 0 }))
      .promise()
      .then(
        () => {
          if (callback?.onDone !== undefined) {
            callback.onDone();
          }
        },
        e => {
          if (callback?.onError !== undefined) {
            callback.onError(e as never);
          }
        }
      );
  }
}
