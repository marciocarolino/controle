import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('fixedExpenses')
export class FixedExpenses {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @ManyToOne(() => User, (user) => user.fixedExpenses)
  @JoinColumn({ name: 'id_user' })
  user: User;

  @Column({ name: 'name_expenses' })
  name_expenses: string;

  @Column({ name: 'description' })
  descripption: string;

  @Column({ name: 'actived', default: true })
  actived: boolean;

  @Column({ name: 'created_at', type: 'timestamp' })
  created_at: Date;

  @Column({ name: 'updated_at', type: 'timestamp' })
  updated_at: Date;
}
