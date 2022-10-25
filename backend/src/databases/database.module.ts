import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FixedExpenses } from './entities/fixedExpenses.entity';
import { RevenueEntity } from './entities/revenue.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DB,
      entities: [RevenueEntity, FixedExpenses, User],
      // migrations: ['./dist/database/migrations/*.js'],
      //migrations: ['src/databases/migrations/**/*{.ts,.js}'],
      synchronize: false,
    }),
  ],
})
export class DataBaseModules {}
