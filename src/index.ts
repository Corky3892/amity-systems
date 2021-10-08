import { Database } from './schemas/connection';

const MongoDB = new Database({
  type: "mongodb",
  host: "localhost",
  port: 27017,
  database: "amity-systems"
});

// Initialize connection to mongoDB
(async () => {
  await MongoDB.connect();
})()

// When node receives a shutdown request attempt to gracefully shutdown the process.
process.on('SIGINT', () => {
  (async () => {
    const err = await MongoDB.close();
    process.exit((err) ? 1 : 0);
  })();
});