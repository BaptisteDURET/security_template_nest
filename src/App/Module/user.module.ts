import { Module } from '@nestjs/common';
import { UserController } from '../Controller/user.controller';
import { UserService } from '../Service/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../Domain/Model/User.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
