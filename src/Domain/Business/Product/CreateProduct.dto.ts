import {
    IsArray,
    IsByteLength,
    IsNotEmpty,
    IsNumber,
    IsPositive,
    IsString,
} from 'class-validator';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    @IsByteLength(3, 200)
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsPositive()
    price: number;

    @IsArray()
    categories: string[] = [];
}
