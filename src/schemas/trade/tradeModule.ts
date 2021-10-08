import { Entity, ObjectID, ObjectIdColumn, Column, BaseEntity} from "typeorm";

import { Rate } from './rate.entity';
import { Order } from './order.entity';

/**
 * The TradeModule Entity implements an instance of the artificat trading functionality.
 * One discord server may implement no or many trade modules.
 */
@Entity()
export class TradeModule extends BaseEntity {

  /** The unique generated id for an Trade Module. */
  @ObjectIdColumn()
  id: ObjectID;

  /** The unique ID of the discord server where the module is running. */
  @Column({ nullable: false })
  serverID: string;

  /** The unique ID of the discord channel where commands for this module should be executed. */
  @Column({ nullable: false, unique: true, })
  commandChannelId: string;

  /** The unique ID of the discord channel where outputs for this module should be printed. */
  @Column({ nullable: false, unique: true, })
  outputChannelId: string;

  /** The rates which are used for this module. */
  @Column(type => Rate)
  rates: Rate[];

  /** The orders which have been placed in this module. */
  @Column(type => Order)
  orders: Order[];

}
