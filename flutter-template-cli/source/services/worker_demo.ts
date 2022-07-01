import { parentPort, workerData } from 'worker_threads';
import fs from 'fs';
import progress, { Progress } from 'progress-stream';
import unzipper from 'unzipper';

function unzipFile(source: string, destination: string) {
  const stat = fs.statSync(source);
  const _progress = progress(
    {
      length: stat.size,
      time: 1500 /* ms */,
    },
    function (progress: Progress) {
      parentPort?.postMessage(progress);
    }
  );

  fs.createReadStream(source)
    .pipe(_progress)
    .pipe(unzipper.Extract({ path: destination, concurrency: 1 }))
    .promise()
    .then(
      () => {
        console.log(`done`);
      },
      e => {
        console.log(`error ${e}`);
      }
    );
}

unzipFile(workerData.source, workerData.destination);
