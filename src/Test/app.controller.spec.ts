import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../App/Controller/app.controller';
import { AppService } from '../App/Service/app.service';
import { AuthenticationGuard } from '../Utils/Authentication/AuthenticationGuard';
import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

describe('AppController', () => {
    let appController: AppController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [AppService, AuthenticationGuard, JwtService],
        }).compile();

        appController = app.get<AppController>(AppController);
    });

    describe('root', () => {
        it('should return "Hello World!"', () => {
            expect(appController.getHello()).toThrow(UnauthorizedException);
        });
    });
});
