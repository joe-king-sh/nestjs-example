import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';
@Injectable()
export class DiscService {
  constructor(private powerService: PowerService) {}
  getData() {
    console.log('Drawing 20 watts of power from Power Service.');
    this.powerService.supplyPower(20);

    return 'Awesome data!';
  }
}
