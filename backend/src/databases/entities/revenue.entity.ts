import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PaidBills } from './paidBills.entity';
import { User } from './user.entity';

@Entity('revenue')
export class RevenueEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @ManyToOne(() => User, (user) => user.fixedExpenses)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => PaidBills, (paidBills) => paidBills.revenue)
  paidBills: PaidBills;

  @Column({ name: 'name_revenue' })
  name_revenue: string;

  @Column({ name: 'value_revenue' })
  value_revenue: number;

  @Column({ name: 'description' })
  description: string;

  @Column({ name: 'actived', type: 'boolean' })
  actived: boolean;

  @Column({ name: 'total' })
  total: number;

  @Column({ name: 'created_at', type: 'timestamp' })
  created_at: Date;

  @Column({ name: 'updated_at', type: 'timestamp' })
  updated_at: Date;
}
