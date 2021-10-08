import { BaseEntity, BeforeInsert, BeforeUpdate } from "typeorm";
import { validateOrReject } from 'class-validator';

/**
 * Extension of BaseEntity with Before Update and Before Insert hooks to ensure data is validated.
 */
export class BaseEntityWithValidation extends BaseEntity {
  @BeforeInsert()
  @BeforeUpdate()
  async validate() {
    await validateOrReject(this);
  }
}