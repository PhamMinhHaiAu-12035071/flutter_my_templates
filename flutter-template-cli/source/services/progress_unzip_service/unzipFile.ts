import { parentPort, workerData } from 'worker_threads';
import fs from 'fs';
import progress, { Progress } from 'progress-stream';
import unzipper from 'unzipper';
import { Status, UnzipFileState } from './index';

function unzipFile(source: string, destination: string) {
  const stateInitial: UnzipFileState = {
    status: Status.INITIAL,
  };
  parentPort?.postMessage(stateInitial);
  const stat = fs.statSync(source);
  const _progress = progress(
    {
      length: stat.size,
      time: 1500 /* ms */,
    },
    function (progress: Progress) {
      const stateProgress: UnzipFileState = {
        status: Status.PROGRESS,
        progress: progress,
      };
      parentPort?.postMessage(stateProgress);
    }
  );

  fs.createReadStream(source)
    .pipe(_progress)
    .pipe(unzipper.Extract({ path: destination, concurrency: 1 }))
    .promise()
    .then(
      () => {
        const stateSuccess: UnzipFileState = {
          status: Status.SUCCESS,
          message: 'Completed',
        };
        parentPort?.postMessage(stateSuccess);
      },
      e => {
        const stateError: UnzipFileState = {
          status: Status.ERROR,
          error: e,
        };
        parentPort?.postMessage(stateError);
      }
    );
}

unzipFile(workerData.source, workerData.destination);
