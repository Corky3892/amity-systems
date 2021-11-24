import { createConnection, getConnection } from "typeorm";
import { TradeModule } from './entities/trade';

// Initialize connection to mongoDB
(async () => {
  await createConnection({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: "amity-systems",
    name: 'default',
    entities: [TradeModule],
  });
  const tradeModule = await TradeModule.findOne({ serverID: 'notAServer' });
})()

// When node receives a shutdown request attempt to gracefully shutdown the process.
process.on('SIGINT', () => {
  (async () => {
    try {
      await getConnection('MongoDB').close();
      process.exit();
    } catch(e) {
      console.error(e);
      process.exit(1);
    }
  })();
});