import { IsNotEmpty, IsString } from 'class-validator';

export class AuthenticationDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}
