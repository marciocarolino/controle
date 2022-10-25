import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FixedExpenses } from 'src/databases/entities/fixedExpenses.entity';
import { Repository } from 'typeorm';
import { ExpensesDTO } from './dto/expenses.dto';

@Injectable()
export class FixedExpensesService {
  constructor(
    @InjectRepository(FixedExpenses)
    private readonly fixedExpensesRepository: Repository<FixedExpenses>,
  ) {}

  async fixedExpensesAll(): Promise<any> {
    return await this.fixedExpensesRepository.find({
      relations: { user: true },
      where: { actived: true },
      order: { id: 'DESC' },
    });
  }

  async fixedExpensesById(id: number): Promise<any> {
    return await this.fixedExpensesRepository.findOne({
      relations: { user: true },
      where: { actived: true, id: id },
    });
  }

  async fixedExpensesSave(expensesDTO: ExpensesDTO): Promise<any> {
    const saveFixedExpenses = this.fixedExpensesRepository.create({
      ...expensesDTO,
      created_at: new Date(),
      updated_at: new Date(),
    });
    return await this.fixedExpensesRepository.save(saveFixedExpenses);
  }

  async fixedExpensesUpdate(
    id: number,
    expensesDTO: ExpensesDTO,
  ): Promise<any> {
    const locate = await this.fixedExpensesRepository.findOne({
      where: { actived: true, id: id },
    });

    locate.name_expenses = expensesDTO.name_expenses;
    locate.descripption = expensesDTO.descripption;
    locate.updated_at = new Date();

    return await this.fixedExpensesRepository.save(locate);
  }

  async fixedExpensesDelete(id: number): Promise<any> {
    const locate = await this.fixedExpensesRepository.findOne({
      where: { actived: true, id: id },
    });

    locate.actived = false;
    locate.updated_at = new Date();
    return await this.fixedExpensesRepository.save(locate);
  }
}
