import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { AuthenticationDto } from 'src/Domain/Business/Authentication/auth.dto';

@Controller('auth')
export class AuthenticationController {
    @Post()
    @UseInterceptors(AnyFilesInterceptor())
    async authenticate(@Body() body: AuthenticationDto) {

    }
}