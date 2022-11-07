import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RevenueEntity } from 'src/databases/entities/revenue.entity';
import { User } from 'src/databases/entities/user.entity';
import { WalletEntity } from 'src/databases/entities/wallet.entity';
import { RevenueController } from './revenue.controller';
import { RevenueService } from './revenue.service';

@Module({
  imports: [TypeOrmModule.forFeature([RevenueEntity, WalletEntity, User])],
  controllers: [RevenueController],
  providers: [RevenueService],
  exports: [RevenueService],
})
export class RevenuModule {}
