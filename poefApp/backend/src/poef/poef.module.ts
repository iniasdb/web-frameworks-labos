import { Module } from '@nestjs/common';
import { PoefService } from './poef.service';
import { PoefController } from './poef.controller';

@Module({
  providers: [PoefService],
  controllers: [PoefController],
})
export class PoefModule {}
