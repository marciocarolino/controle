import { ApiProperty } from '@nestjs/swagger';

export class ExpensesDTO {
  @ApiProperty({ description: 'id', example: 1 })
  id: number;

  @ApiProperty({ description: 'name_expenses', example: 'conta de luz' })
  name_expenses: string;

  @ApiProperty({ description: 'value_expenses', example: 11.5 })
  value_expenses: number;

  @ApiProperty({ description: 'description', example: 'descricao da conta' })
  descripption: string;

  @ApiProperty({ description: 'actived', example: true })
  actived: boolean;

  @ApiProperty({ description: 'created_at', example: new Date() })
  created_at: Date;

  @ApiProperty({ description: 'updated_at', example: new Date() })
  updated_at: Date;
}
