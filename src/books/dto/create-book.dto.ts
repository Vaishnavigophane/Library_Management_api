import {
  IsInt,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsPositive,
  Min,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({ example: 'NestJS Fundamentals' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  author: string;

  @ApiProperty({ example: 'Programming' })
  @IsString()
  @IsNotEmpty()
  category: string;

  @ApiProperty({ example: 499 })
  @IsNumber()
  @IsPositive()
  price: number;

  @ApiProperty({ example: 5 })
  @IsInt()
  @IsNumber()
  @Min(1)
  quantity: number;

  @ApiProperty({ example: 2024 })
  @IsInt()
  @IsNumber()
  publishedYear: number;
}
