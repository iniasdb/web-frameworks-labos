import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PoefModule } from './poef/poef.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [PoefModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
