import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RevenueEntity } from 'src/databases/entities/revenue.entity';
import { User } from 'src/databases/entities/user.entity';
import { WalletEntity } from 'src/databases/entities/wallet.entity';
import { Repository } from 'typeorm';
import { RevenueDTO } from './dto/revenue.dto';

@Injectable()
export class RevenueService {
  constructor(
    @InjectRepository(RevenueEntity)
    private readonly revenuEntity: Repository<RevenueEntity>,

    @InjectRepository(WalletEntity)
    private readonly walletEntity: Repository<WalletEntity>,

    @InjectRepository(User)
    private readonly userEntity: Repository<User>,
  ) {}

  async revenueAll(): Promise<any> {
    const findRevenue = await this.revenuEntity.find({
      relations: { user: true },
      where: { actived: true },
    });

    const result: any = [];

    for (const new_result of findRevenue) {
      result.push({
        id: new_result.id,
        user_name: new_result.user.name,
        name_revenue: new_result.name_revenue,
        total: new_result.user.wallet,
        description: new_result.description,
      });
    }
    return result;

    // const findWallet = await this.walletEntity.findOne({
    //   relations: { user: true },
    //   where: { user: { id: user_id } },
    // });

    // return findWallet;
  }

  async createRevenue(revenueDTO: RevenueDTO): Promise<any> {
    const saveRevenue = this.revenuEntity.create({
      ...revenueDTO,
      user: revenueDTO.user_id,
      actived: true,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.updateWallet(revenueDTO.user_id, revenueDTO.value_revenue);
    return this.revenuEntity.save(saveRevenue);
  }

  //Update na tabela wallet
  async updateWallet(user_id: any, value: number): Promise<any> {
    const findWallt = await this.walletEntity.findOne({
      where: { user: { id: user_id } },
    });

    if (findWallt === null) {
      this.createWallet(user_id, value);
    }

    findWallt.total = findWallt.total + value;

    this.walletEntity.save(findWallt);
    return null;
  }

  async createWallet(user_id: any, value: number): Promise<any> {
    const save_new_wallet = this.walletEntity.create({
      user: user_id,
    });

    this.walletEntity.save(save_new_wallet);
    return this.updateWallet(user_id, value);
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
    findRevenue.description = revenueDTO.description;
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
