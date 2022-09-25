import { Module } from '@nestjs/common';
import { RevenuModule } from './app/revenue/revenuce.module';
import { DataBaseModules } from './databases/database.module';

@Module({
  imports: [DataBaseModules, RevenuModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
