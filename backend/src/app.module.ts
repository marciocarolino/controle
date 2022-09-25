import { Module } from '@nestjs/common';
import { RevenuModule } from './app/revenue/revenuce.module';

@Module({
  imports: [RevenuModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
