import { Entity, Column } from "typeorm";

/**
 * Defines the possible Artifact Levels which may be trade.
 */
export const ArtifactLevel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

/**
 * Possible values for an Artificat Level.
 */
export type ArtifactLevelType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

/**
 * Enumerate the shorthand codes denoting the various artifact types.
 */
export enum ArtificatType {
  /** Orb */
  O = 'o',
  /** Tetrahedron */
  T = 't',
  /** Blue Crystal */
  C = 'c',
}

/**
 * Describe 
 */
@Entity()
export class Rate {

  @Column({ 
    nullable: false,
    enum: ArtifactLevel, 
  })
  buy: ArtifactLevelType;

  @Column({
    nullable: false,
    enum: ArtifactLevel,
  })
  sell: ArtifactLevelType;

  @Column({
    nullable: false,
    enum: ArtificatType,
  })
  type: string;

  @Column({ nullable: false })
  rate: number;

}

