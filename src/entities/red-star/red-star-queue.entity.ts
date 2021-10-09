import { ArrayMaxSize, IsEnum } from "class-validator";
import { Column, Entity, ObjectID, ObjectIdColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RedStarLevelType } from "../_common";
import { Member } from "../member/member.entity";

@Entity()
export class RedStar {

    @PrimaryGeneratedColumn()
    // The unique of the red star queue
    id: number;

    @Column({ nullable: false, enumName: 'RedStarLevelType' })
    // The level of the red star run 
    level: RedStarLevelType;

    @Column()
    //** Whether the red star has been finished */
    isComplete: boolean;

    @Column({ nullable: true })
    //** Red star event points earned by this run */
    eventPoints: number;

    //** The list of players within this red star */
    @Column()
    @OneToMany(() => Member, member => member.id)
    @ArrayMaxSize(4)
    membersInQueue: Array<Member>;
}