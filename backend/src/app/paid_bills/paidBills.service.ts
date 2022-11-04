import { InjectRepository } from '@nestjs/typeorm';
import { PaidBills } from 'src/databases/entities/paidBills.entity';
import { Repository } from 'typeorm';
import { PaidBillsDTO } from './dto/paidBills.dto';

export class PaidBillsService {
  constructor(
    @InjectRepository(PaidBills)
    private readonly paidBills: Repository<PaidBills>,
  ) {}

  async getAll(): Promise<any> {
    return await this.paidBills.find();
  }

  async savePaibBills(paidBillsDTO: PaidBillsDTO): Promise<any> {
    const new_paibBill = this.paidBills.create({
      ...paidBillsDTO,
    });
    const new_save = this.paidBills.save(new_paibBill);
    new_paibBill.revenue.value_revenue - new_paibBill.value_paidBills;
  }
}
