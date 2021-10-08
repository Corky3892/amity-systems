import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm";
import { ArrayMinSize, ArrayMaxSize, IsEnum } from 'class-validator';

import { ArtifactLevel, ArtifactLevelType, Artifact, ArtifactType } from '../_common';

/**
 * Defines the different statuses of an order. 
 */
export enum OrderStatus {
  p = 'Pending',
  a = 'Accepted',
  c = 'Cancelled',
  e = 'Executed',
}

/**
 * Describe a trade order object.
 */
@Entity()
export class Order {

  /** The unique generated id for an order. */
  @ObjectIdColumn()
  id: ObjectID;

  /** The discord userID of the buyer which placed the order. */
  @Column({ nullable: false })
  buyerId: string;

  /** The discord userID of the seller which accepted the order. */
  @Column()
  sellerId: string;

  /** The Artifiact Level which is to be purchased. */
  @Column({ nullable: false, type: 'enum', enum: ArtifactLevel })
  @IsEnum(ArtifactLevel)
  ask: ArtifactLevelType;

  /** The composition of artifacts being required. */
  @Column({ nullable: false })
  @ArrayMaxSize(3)
  @ArrayMinSize(1)
  @IsEnum(Artifact, {each: true})
  askComposition: Array<ArtifactType>;

  /** The Artifiact Level which is offered. */
  @Column({ nullable: false, type: 'enum', enum: ArtifactLevel })
  @IsEnum(ArtifactLevel)
  offer: ArtifactLevelType;

  /** The number of artifacts which are being offered. */
  @Column({ nullable: false})
  offerAmount: number;

  /** The status of an order. */
  @Column({ nullable: false, type: 'enum', enum: OrderStatus })
  @IsEnum(OrderStatus)
  status: OrderStatus;

}
