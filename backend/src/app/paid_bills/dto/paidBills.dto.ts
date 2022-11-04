import { ApiProperty } from '@nestjs/swagger';

export class PaidBillsDTO {
  @ApiProperty({ description: 'id', example: 1 })
  id: number;

  @ApiProperty({ description: 'name_Paid_Bills', example: 'Conta de Luz' })
  name_Paid_Bills: string;

  @ApiProperty({ description: 'value_paidBills', example: 66.81 })
  value_paidBills: number;

  @ApiProperty({ description: 'description', example: 'Descrição ' })
  descripption: string;

  @ApiProperty({ description: 'created_at', example: new Date() })
  created_at: Date;

  @ApiProperty({ description: 'updated_at', example: new Date() })
  updated_at: Date;
}
