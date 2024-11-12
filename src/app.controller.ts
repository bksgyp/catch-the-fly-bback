import { Controller, Get, Post, Body, Param, HttpStatus, HttpException } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateRecordDto } from './dto/record.dto';
import { Difficulty } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('record')
  createRecord(@Body() createRecordDto: CreateRecordDto) {
    const savedRecord = this.appService.saveRecord(createRecordDto);
    return {
      message: 'Record saved successfully.',
      data: savedRecord,
    };
  }

  @Get('rankings/:difficulty')
  getRankings(@Param('difficulty') difficulty: string) {
    if (!['easy', 'medium', 'hard'].includes(difficulty)) {
      throw new HttpException('Invalid difficulty level', HttpStatus.BAD_REQUEST);
    }
    return this.appService.getRankings(difficulty as Difficulty);
  }
}
