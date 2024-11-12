import { IsString, IsNumber, IsIn } from 'class-validator';
import { Difficulty } from '../types';

export class CreateRecordDto {
  @IsString()
  name: string;

  @IsIn(['easy', 'medium', 'hard'])
  difficulty: Difficulty;

  @IsNumber()
  time: number;
} 