import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";

import { Rate } from './rate';

@Entity()
export class Trade {

  @ObjectIdColumn()
  id: ObjectID;

  @Column({ nullable: false })
  serverID: string;s

  @Column({
    nullable: false,
    unique: true,
  })
  channelId: string;

  @Column(type => Rate)
  rates: Rate[];

}

const a = new Rate()
a.buy