import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RevenueService } from './revenue.service';
@ApiTags('Revenue')
@Controller('revenue')
export class RevenueController {
  constructor(private readonly revenueService: RevenueService) {}

  @Get()
  @ApiOperation({ summary: 'Find Revenue all' })
  @ApiResponse({ status: 200, description: 'Find Revenue All' })
  async revenueAll(): Promise<any> {
    return this.revenueService.revenueAll();
  }
}
