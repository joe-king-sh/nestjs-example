import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from './report.entity';

@Injectable()
export class ReportsService {
  constructor(@InjectRepository(Report) private repo: Repository<Report>) {
    this.repo = repo;
  }

  create(id: number, price: number): Promise<Report> {
    const Report = this.repo.create({ id, price });
    return this.repo.save(Report);
  }
}
