import { IsEmail, Max, MaxLength, Min, MinLength } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EncryptionTransformer } from 'typeorm-encrypted';
import Discipline from './Discipline';
import { MyCripto } from '../helpers/crypto';

@Entity('student')
export default class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ transformer: MyCripto })
  @MaxLength(50, { message: 'Tamanho maximo exedito' })
  @MinLength(2)
  name: string;

  @Column({ transformer: MyCripto })
  @IsEmail()
  email: string;

  @Column()
  @Max(99999)
  @Min(10000)
  key: number;

  @ManyToMany(type => Discipline)
  @JoinTable()
  disciplines: Discipline[];

  @CreateDateColumn({ name: 'created_At' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_At' })
  updatedAt: Date;
}
