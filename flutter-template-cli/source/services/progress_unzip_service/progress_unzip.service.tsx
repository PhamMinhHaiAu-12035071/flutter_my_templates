import { Progress } from 'progress-stream';
import { Worker } from 'worker_threads';
import _ from 'lodash';
import { Status } from './index';

export interface LifecycleProgress {
  onInit?: () => void;
  onProgress?: (progress: Progress) => void;
  onSuccess?: () => void;
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

  public unzipFile(source: string, destination: string, _callback?: LifecycleProgress): void {
    const worker = new Worker('./source/services/progress_unzip_service/unzipFileMain.js', {
      workerData: {
        source: source,
        destination: destination,
        path: './unzipFile.ts',
      },
    });

    worker.on('message', result => {
      const status: Status = _.get(result, 'status');
      switch (status) {
        case Status.INITIAL:
          if (_callback?.onInit !== undefined) {
            _callback.onInit();
          }
          break;
        case Status.PROGRESS:
          if (_callback?.onProgress !== undefined) {
            _callback.onProgress(_.get(result, 'progress'));
          }
          break;
        case Status.SUCCESS:
          if (_callback?.onSuccess !== undefined) {
            _callback.onSuccess();
          }
          break;
        case Status.ERROR:
          if (_callback?.onError !== undefined) {
            _callback.onError(_.get(result, 'error') as never);
          }
          break;
      }
    });
  }
}
