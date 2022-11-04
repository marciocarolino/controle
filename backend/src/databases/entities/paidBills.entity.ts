import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RevenueEntity } from './revenue.entity';

@Entity({ name: 'public.paidBills' })
export class PaidBills {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name_Paid_Bills' })
  name_Paid_Bills: string;

  @Column({ name: 'value_paidBills' })
  value_paidBills: number;

  @Column({ name: 'description' })
  descripption: string;

  @Column({ type: 'timestamp', name: 'created_at' })
  created_at: Date;

  @Column({ type: 'timestamp', name: 'updated_at' })
  updated_at: Date;

  @ManyToOne(() => RevenueEntity, (revenue) => revenue.paidBills)
  @JoinColumn({ name: 'revenue_id' })
  revenue: RevenueEntity;
}
