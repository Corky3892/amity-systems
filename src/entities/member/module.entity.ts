import { IsEnum, IsString } from "class-validator";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { ModuleLevelType } from "../_common";

export enum ModuleType {
    Trading,
    Mining,
    Weapons,
    Shields,
    Support
}

@Entity()
export class Module<ModuleType> {


    //** The  user this module belongs to */
    @Column()
    public userId: string;

    //** The type of module */
    @Column()
    public moduleType: ModuleType;

    //** Display name of the module */
    @Column()
    public name: string;

    //** The level of the module */
    @Column()
    public level: ModuleLevelType;

}

@Entity()
export class Modules {

    @PrimaryColumn()
    //** The primary id of the modules container */
    public id: string;

    @OneToMany(() => Module, module => module.userId)
    /** The list of trading modules */
    public trading: Module<ModuleType.Trading>[];

    @OneToMany(() => Module, module => module.userId)
    /** The list of mining modules */
    public mining: Module<ModuleType.Mining>[];

    @OneToMany(() => Module, module => module.userId)
    /** The list of weapon modules */
    public weapons: Module<ModuleType.Weapons>[];

    @OneToMany(() => Module, module => module.userId)
    /** The list of shield modules */
    public shields: Module<ModuleType.Shields>[];

    @OneToMany(() => Module, module => module.userId)
    /** The list of support modules*/
    public support: Module<ModuleType.Support>[];
}

