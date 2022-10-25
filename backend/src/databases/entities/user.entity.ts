import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FixedExpenses } from './fixedExpenses.entity';
import { RevenueEntity } from './revenue.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @OneToMany(() => FixedExpenses, (fixedExpenses) => fixedExpenses.user)
  fixedExpenses: FixedExpenses;

  @OneToMany(() => RevenueEntity, (revenueEntityue) => revenueEntityue.user)
  revenueEntityue: RevenueEntity;
}
