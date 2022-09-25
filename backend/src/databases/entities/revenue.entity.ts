import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('revenue')
export class RevenueEntity {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name_revenue' })
  name_revenue: string;

  @Column({ name: 'value_revenue' })
  value_revenue: number;

  @Column({ name: 'description' })
  descripption: string;

  @Column({ name: 'actived', type: 'boolean' })
  actived: boolean;

  @Column({ name: 'created_at', type: 'timestamp' })
  created_at: Date;

  @Column({ name: 'updated_at', type: 'timestamp' })
  updated_at: Date;
}
