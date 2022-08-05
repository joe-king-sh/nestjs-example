import { Body, Controller, Post } from '@nestjs/common';
import { CreateReportDto } from './dtos/create-report.dto';
import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private reportsService: ReportsService) {}
  @Post('')
  createreport(@Body() body: CreateReportDto) {
    this.reportsService.create(body.id, body.price);
  }
}
