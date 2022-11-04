import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FixedExpensesController } from './fixedExpenses.controller';
import { FixedExpensesService } from './fixedExpenses.service';
import { FixedExpenses } from 'src/databases/entities/fixedExpenses.entity';
import { User } from 'src/databases/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FixedExpenses, User])],
  controllers: [FixedExpensesController],
  providers: [FixedExpensesService],
  exports: [FixedExpensesService],
})
export class ModuleFixedExpenses {}
