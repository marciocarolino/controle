import { Controller } from '@nestjs/common';
import { FixedExpensesService } from './fixedExpenses.service';

@Controller('fixedExpenses')
export class FixedExpensesController {
  constructor(private readonly fixedExpensesService: FixedExpensesService) {}
}
