import { Module } from '@nestjs/common';
import { FactorialService } from './app.service';

@Module({
  imports: [],
  controllers: [],
  providers: [FactorialService],
  exports:[FactorialService],
})
export class FactorialModule {}
