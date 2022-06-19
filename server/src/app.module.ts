import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersModule} from "./users/users.module";
import { AuthModule } from './auth/auth.module';
import {JwtModule} from "@nestjs/jwt";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5434,
    database: 'Hack',
    entities: [
      __dirname + 'src/**/*.entity{.ts,.js}',
    ],
    synchronize: true,
    autoLoadEntities: true
  }), UsersModule, AuthModule, JwtModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
