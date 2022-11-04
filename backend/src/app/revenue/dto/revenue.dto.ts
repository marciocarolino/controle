import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/databases/entities/user.entity';

export class RevenueDTO {
  @ApiProperty({ description: 'id', example: 1 })
  id: number;

  @ApiProperty({ description: 'name_revenue', example: 'conta de luz' })
  name_revenue: string;

  @ApiProperty({ description: 'value_revenue', example: 11.5 })
  value_revenue: number;

  @ApiProperty({ description: 'description', example: 'descricao da conta' })
  description: string;

  @ApiProperty({ description: 'total', example: 500.0 })
  total: number;

  @ApiProperty({ description: 'actived', example: true })
  actived: boolean;

  @ApiProperty({ description: 'created_at', example: new Date() })
  created_at: Date;

  @ApiProperty({ description: 'updated_at', example: new Date() })
  updated_at: Date;

  user: User;
}
