import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../Domain/Model/User.entity';
import { AuthenticationController } from '../Controller/auth.controller';
import { AuthenticationService } from '../Service/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [AuthenticationController],
    providers: [AuthenticationService, JwtService],
})
export class AuthenticationModule {}
