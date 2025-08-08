import {
    BadRequestException,
    Body,
    Controller,
    Get,
    Post,
    UseInterceptors,
} from '@nestjs/common';
import { UserService } from '../Service/user.service';
import { User } from '../../Domain/Model/User.entity';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { CreateUserDto } from 'src/Domain/Business/User/CreateUser.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async getAllUsers(): Promise<User[]> {
        const users = await this.userService.findAll();
        return users;
    }

    @Post()
    @UseInterceptors(AnyFilesInterceptor())
    async createUser(@Body() body: CreateUserDto): Promise<User> {
        if (
            (await this.userService.findOneByUsername(body.username)) instanceof
            User
        ) {
            throw new BadRequestException(
                `Username ${body.username} is already used`,
            );
        }

        if (body.password !== body.confirmPassword) {
            throw new BadRequestException(
                'password and confirmation should be equal',
            );
        }

        const user = this.userService.create(body);

        return user;
    }
}
