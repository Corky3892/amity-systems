import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";
import { IsString } from 'class-validator';

import { BaseEntityWithValidation } from '../_common';

import { Rate } from './rate.entity';
import { Order } from './order.entity';

/**
 * The TradeModule Entity implements an instance of the artificat trading functionality.
 * One discord server may implement no or many trade modules.
 */
@Entity()
export class TradeModule extends BaseEntityWithValidation {

  /** The unique generated id for an Trade Module. */
  @ObjectIdColumn()
  id: ObjectID;

  /** The unique ID of the discord server where the module is running. */
  @Column()
  @IsString()
  serverID: string;

  /** The unique ID of the discord channel where commands for this module should be executed. */
  @Column({ unique: true })
  @IsString()
  commandChannelId: string;

  /** The unique ID of the discord channel where outputs for this module should be printed. */
  @Column({ unique: true })
  @IsString()
  outputChannelId: string;

  /** The rates which are used for this module. */
  @Column(type => Rate)
  rates: Rate[];

  /** The orders which have been placed in this module. */c
  @Column(type => Order)
  orders: Order[];

  async bindChannel(serverId: string, channelId: string, purpose: 'Commands' | '') {
    const a = 'asdad'
  }

}

// - /create tradeModule name
//  - /bind name server channel tradecommands
//  - /bind name server channel tradeoutputs
//  - /setrates ratesJson
//  - /createeOrder target offer type
//  - /acceptOrder orderId
//  - /cancelOrder orderid
//  - /completeOrder orderid
// [4:00 PM]
// I am hoping server and channel ids can be inferred from the context
// [4:00 PM]
// the first four should be restricted to server admins (edited)
// [4:00 PM]
// the last three should be triggered by reactions
// [4:01 PM]
// down the road implement a /queryHistory queryParams command
// [4:02 PM]
// could also have a /create tradeModule serverId commandChannelId outputChannelID to give some flexibility
// [4:04 PM]
// also will need a reaction for /cancelOrderAcceptance orderId