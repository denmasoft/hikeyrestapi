const path = require('path');
const os = require('os');
const SocketCluster = require('socketcluster');

// eslint-disable-next-line no-unused-vars
const socketCluster = new SocketCluster({
  workers: os.cpus.length,
  brokers: os.cpus.length,
  port: process.env.PORT || 3002,
  appName: 'Hikey Resources Api',
  workerController: path.resolve(__dirname, 'worker.js'),
  brokerController: path.resolve(__dirname, 'broker.js'),
  socketChannelLimit: 1000,
  rebootWorkerOnCrash: true,
});
