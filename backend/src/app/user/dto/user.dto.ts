import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
  id: number;

  name: string;

  @ApiProperty({ description: 'actived', example: true })
  actived: boolean;

  @ApiProperty({ description: 'created_at', example: new Date() })
  created_at: Date;

  @ApiProperty({ description: 'updated_at', example: new Date() })
  updated_at: Date;
}
