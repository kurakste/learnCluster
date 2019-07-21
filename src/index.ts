const os = require('os');
const cluster = require('cluster');
;
const pid = process.pid;

if (cluster.isMaster) {
  const cpusCount = os.cpus().length;
  console.log(`CPUs: ${cpusCount}`);
  console.log(`Master started Pid: ${pid}`)
  for (let i=0; i<cpusCount-1; i++) {
    const worker = cluster.fork();
    worker.on('exit', ariseWorker);
  }
} 

function ariseWorker() {
    console.log(`Worker died! PID: ${this.process.pid}`);
    const nworker =cluster.fork();
    console.log(`new worker started: ${nworker.process.pid}`);
    nworker.on('exit', ariseWorker);
}

if (cluster.isWorker) {
  require('./worker');
}

