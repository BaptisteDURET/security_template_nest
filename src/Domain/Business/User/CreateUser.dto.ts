import { IsByteLength, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    @IsByteLength(6, 100)
    password: string;

    @IsNotEmpty()
    @IsString()
    @IsByteLength(6, 100)
    confirmPassword: string;

    roles: string;
}
