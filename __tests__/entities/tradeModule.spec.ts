/// <reference types="jest" />

import { createConnection, Connection } from "typeorm";

import { TradeModule } from '../../src/entities/trade';

// Unit tests for the TradeModule Entity
describe('update validation tests', () => {
  // Connection variable
  let connection: Connection;

  // Initialize connection to mongoDB
  beforeAll(async () => {
    connection = await createConnection({
      type: "mongodb",
      host: "localhost",
      port: 27017,
      database: "amity-systems",
      name: 'default',
      entities: [TradeModule],
    });
  });
  
  // Test to ensure that validation is working as intended.
  test('Entity Creation Requires Validation', async () => {
    try {
      const tradeModule = new TradeModule();
      await tradeModule.save();
    } catch(e) {
      expect(e).toMatchObject(
        [{
          "children": [], 
          "constraints": {
            "isString": "serverID must be a string"
          }, 
          "property": "serverID", 
          "target": {}, 
          "value": undefined
        }, {
          "children": [], 
          "constraints": {
            "isString": "commandChannelId must be a string"
          }, 
          "property": "commandChannelId", 
          "target": {}, 
          "value": undefined
        }, {
          "children": [], 
          "constraints": {
            "isString": "outputChannelId must be a string"
          }, "property": "outputChannelId", 
          "target": {}, 
          "value": undefined
        }]
      );
    }
  })

  // Test Entity Creation
  test('Entity Creation Success', async () => {
    const tradeModule = new TradeModule();
    tradeModule.serverID = 'notAServer';
    tradeModule.commandChannelId = 'notACommandChannel';
    tradeModule.outputChannelId = 'notAnOutputChannel';
    const res = await tradeModule.save();
  })

  test('Entity Update Requires Validation', async () => {
    const tradeModule = await TradeModule.findOne({ serverID: 'notAServer' });
    const res = await tradeModule.remove()
    console.log(res)
  })

  test('Deletion', async () => {

  })

  // Clean-up open connections after all tests run
  afterAll(async () => {
    connection.close();
  });

})
