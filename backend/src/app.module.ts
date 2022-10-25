import { Module } from '@nestjs/common';
import { FixedExpenses } from './app/fixed_expenses/fixedExpenses.module';
import { RevenuModule } from './app/revenue/revenuce.module';
import { UserModule } from './app/user/user.module';
import { DataBaseModules } from './databases/database.module';

@Module({
  imports: [DataBaseModules, RevenuModule, FixedExpenses, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
