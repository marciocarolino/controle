import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/databases/entities/user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userEntity: Repository<User>,
  ) {}

  async userAll(): Promise<any> {
    return this.userEntity.find({
      order: { id: 'ASC' },
    });
  }
  async userGetById(id: number): Promise<any> {
    const userFind = await this.userEntity.findOne({
      where: { id: id },
    });

    if (!userFind) {
      throw new Error();
    }

    return userFind;
  }

  async createUser(user: UserDTO): Promise<any> {
    const create_new_user = this.userEntity.create({
      ...user,
      actived: true,
      created_at: new Date(),
      updated_at: new Date(),
    });

    return await this.userEntity.save(create_new_user);
  }
}
