import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RevenueEntity } from 'src/databases/entities/revenue.entity';
import { Repository } from 'typeorm';
import { RevenueDTO } from './dto/revenue.dto';

@Injectable()
export class RevenueService {
  constructor(
    @InjectRepository(RevenueEntity)
    private readonly revenuEntity: Repository<RevenueEntity>,
  ) {}

  async revenueAll(): Promise<any> {
    return this.revenuEntity.find({
      where: { actived: true },
      order: { id: 'ASC' },
    });
  }

  async createRevenue(revenueDTO: RevenueDTO): Promise<any> {
    const saveRevenue = this.revenuEntity.create({
      ...revenueDTO,
      actived: true,
      created_at: new Date(),
      updated_at: new Date(),
    });
    return this.revenuEntity.save(saveRevenue);
  }
  async updateRevenue(
    revenueDTO: RevenueDTO,
    id_revenue: number,
  ): Promise<any> {
    const findRevenue = await this.revenuEntity.findOne({
      where: { id: id_revenue, actived: true },
    });

    findRevenue.name_revenue = revenueDTO.name_revenue;
    findRevenue.value_revenue = revenueDTO.value_revenue;
    findRevenue.descripption = revenueDTO.descripption;
    findRevenue.updated_at = new Date();

    return this.revenuEntity.save(findRevenue);
  }
  async disableRevenue(
    revenueDTO: RevenueDTO,
    id_revenue: number,
  ): Promise<any> {
    const findRevenue = await this.revenuEntity.findOne({
      where: { id: id_revenue, actived: true },
    });

    findRevenue.actived = false;
    findRevenue.updated_at = new Date();

    return this.revenuEntity.save(findRevenue);
  }
}
