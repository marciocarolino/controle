import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ExpensesDTO } from './dto/expenses.dto';
import { FixedExpensesService } from './fixedExpenses.service';

@Controller('fixedExpenses')
export class FixedExpensesController {
  constructor(private readonly fixedExpensesService: FixedExpensesService) {}

  @ApiOperation({ summary: 'Find Fixed Expenses all' })
  @ApiResponse({ status: 200, description: 'Find Fixed Expenses All' })
  @Get()
  async fixedExpensesAll(): Promise<any> {
    return this.fixedExpensesService.fixedExpensesAll();
  }

  @Get(':id')
  async fixedExpensesById(@Param('id') id: number): Promise<any> {
    return this.fixedExpensesService.fixedExpensesById(id);
  }

  @ApiResponse({ status: 201, description: 'Create Find Fixed Expenses' })
  @Post()
  async fixedExpensesSave(expensesDTO: ExpensesDTO): Promise<any> {
    return this.fixedExpensesService.fixedExpensesSave(expensesDTO);
  }

  @Put(':id')
  async fixedExpensesUpdate(
    @Param('id') id: number,
    @Body() expensesDTO: ExpensesDTO,
  ): Promise<any> {
    return this.fixedExpensesService.fixedExpensesUpdate(id, expensesDTO);
  }

  @Delete(':id')
  async fixedExpensesDelete(@Param('id') id: number): Promise<any> {
    return this.fixedExpensesService.fixedExpensesDelete(id);
  }
}
