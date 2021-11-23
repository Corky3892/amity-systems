
import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
import { Modules } from ".";
import { RedStarLevelType } from "../_common";

export enum Rank {
    Member, // standard member
    Leader, // White star leader
    Owner // discord owner / dictator
}

@Entity()
export class Member {

    /** Unique discord id of the member */
    @PrimaryColumn()
    public id: string;

    /** The rank of the member */
    @Column()
    public rank: Rank;

    /** The max level red stars the member can do */
    @Column()
    public redStarLevel: RedStarLevelType;

    /** The discord server the member belongs to */
    @Column()
    public serverId: string;

    /** The modules container */
    @OneToOne(() => Modules, modules => modules.id)
    public modules: Modules;
}
