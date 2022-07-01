const path = require('path');
const { workerData } = require('worker_threads');

require('ts-node').register();
require(path.join(__dirname, workerData.path));
