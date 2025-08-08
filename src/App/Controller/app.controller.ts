import { Controller, Get } from '@nestjs/common';
import { AppService } from '../app.service';
// import { Authentication } from '../Utils/Authentication/Authentication.decorator';
// import Roles from '../Utils/types/Roles';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    // @Authentication(Roles.ROLE_ADMIN)
    getHello(): string {
        console.log('running from' + __dirname);
        return this.appService.getHello();
    }
}
