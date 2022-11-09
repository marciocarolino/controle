import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RevenueDTO } from './dto/revenue.dto';
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

  @Get(':id')
  @ApiOperation({ summary: 'FindOne Revenue' })
  @ApiResponse({ status: 200, description: 'FindOne Revenue' })
  async revenueOne(@Param('id') id: any): Promise<any> {
    return this.revenueService.revenueFindOne(id);
  }

  @Post()
  async createRevenue(@Body() revenueDTO: RevenueDTO): Promise<any> {
    return this.revenueService.createRevenue(revenueDTO);
  }
}
