import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FixedExpenses } from './fixedExpenses.entity';
import { RevenueEntity } from './revenue.entity';
import { WalletEntity } from './wallet.entity';

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

  @OneToMany(() => WalletEntity, (wallet) => wallet.user)
  wallet: WalletEntity;

  @Column({ name: 'actived' })
  actived: boolean;

  @Column({ type: 'timestamp', name: 'created_at' })
  created_at: Date;

  @Column({ type: 'timestamp', name: 'updated_at' })
  updated_at: Date;
}
