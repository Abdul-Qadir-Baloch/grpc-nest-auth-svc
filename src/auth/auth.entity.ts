import { Exclude } from 'class-transformer';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
export enum Roles {
  User ='user',
  Admin = 'admin'
}
@Entity()
export class Auth extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar' })
  public email!: string;
  @Column({type:'enum'})
  public role :Roles ;

  @Column({ type: 'varchar',nullable:true })
  public location: string;

  @Exclude()
  @Column({ type: 'varchar' })
  public password!: string;
}