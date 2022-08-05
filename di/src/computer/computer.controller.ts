import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiscService } from 'src/disc/disc.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private readonly discService: DiscService,
    private readonly cpuService: CpuService,
  ) {}
  @Get()
  run() {
    return [this.cpuService.compute(1000000000, 2), this.discService.getData()];
  }
}
