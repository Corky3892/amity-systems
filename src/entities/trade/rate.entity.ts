import { Entity, Column } from "typeorm";

import { ArtifactLevel, ArtifactLevelType, Artifact, ArtifactType }  from '../_common';
import { IsEnum } from 'class-validator';

/**
 * Describe a single rate conversion object.
 */
@Entity()
export class Rate {

  /** The Artifiact Level which is to be purchased. */
  @Column({ nullable: false, type: 'enum', enum: ArtifactLevel })
  @IsEnum(ArtifactLevel)
  ask: ArtifactLevelType;

  /** The Artifiact Level which is offered. */
  @Column({ nullable: false, type: 'enum', enum: ArtifactLevel })
  @IsEnum(ArtifactLevel)
  offer: ArtifactLevelType;

  /** The Artifiact Type which this rate describes. */
  @Column({ nullable: false, type: 'enum', enum: Artifact })
  @IsEnum(Artifact)
  type: ArtifactType;

  /** 
   * The numeric rate which applies to covert the offer into the ask.
   * For example a value of 3 would indicate that 3 of the offer artifacts must be provided to receive 1 ask artifact.
   */
  @Column({ nullable: false })
  rate: number;

}
