import { IsNumber } from 'class-validator';

export class CreateReportDto {
  @IsNumber()
  id: number;
  @IsNumber()
  price: number;
}
