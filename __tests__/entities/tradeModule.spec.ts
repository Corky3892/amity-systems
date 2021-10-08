/// <reference types="jest" />

import { createConnection, getConnection } from "typeorm";

import { TradeModule } from '../../src/entities/trade';

// Unit tests for the TradeModule Entity
describe('update validation tests', () => {
  beforeAll(async () => {
    // Initialize connection to mongoDB
    await createConnection({
      type: "mongodb",
      host: "localhost",
      port: 27017,
      database: "amity-systems",
      name: 'default',
      entities: [TradeModule],
    });

  });
  


  test('Entity Creation Requires Validation', async () => {
    const trades = new TradeModule();
    const a = await trades.save()
  })

  test('Entity Creation Success', async () => {

  })

  test('Entity Update Requires Validation', async () => {

  })

  test('Deletion', async () => {

  })

})
