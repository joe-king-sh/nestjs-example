import { Module } from '@nestjs/common';
import { PowerModule } from 'src/power/power.module';
import { DiscService } from './disc.service';

@Module({
  imports: [PowerModule],
  providers: [DiscService],
  exports: [DiscService],
})
export class DiscModule {}
