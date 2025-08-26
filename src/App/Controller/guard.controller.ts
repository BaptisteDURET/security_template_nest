import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthenticationGuard } from 'src/Utils/Authentication/AuthenticationGuard';

@Controller('test')
export class TestController {
    @Get()
    test() {
        return "doesn't use Guard";
    }

    @UseGuards(AuthenticationGuard)
    @Post()
    test2() {
        return 'useGuard';
    }
}
