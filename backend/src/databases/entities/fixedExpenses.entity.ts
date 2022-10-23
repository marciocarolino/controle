import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('fixedExpenses')
export class FixedExpenses {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name_expenses' })
  name_expenses: string;

  @Column({ name: 'value_expenses' })
  value_expenses: number;

  @Column({ name: 'description' })
  descripption: string;

  @Column({ name: 'actived', default: true })
  actived: boolean;

  @Column({ name: 'created_at', type: 'timestamp' })
  created_at: Date;

  @Column({ name: 'updated_at', type: 'timestamp' })
  updated_at: Date;
}
