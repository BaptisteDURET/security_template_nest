import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { AuthenticationDto } from 'src/Domain/Business/Authentication/Authentication.dto';
import { AuthenticationService } from '../Service/auth.service';

@Controller('auth')
export class AuthenticationController {
    constructor(private readonly authService: AuthenticationService) {}

    @Post()
    @UseInterceptors(AnyFilesInterceptor())
    async authenticate(@Body() body: AuthenticationDto) {
        const token = await this.authService.authenticate(body);
        return { token };
    }
}
