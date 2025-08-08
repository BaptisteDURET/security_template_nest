import { Repository } from 'typeorm';
import { User } from '../../Domain/Model/User.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/Domain/Business/User/CreateUser.dto';
import Roles from 'src/Utils/types/Roles';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async findOneByUsername(username: string) {
        console.log(
            typeof (await this.userRepository.findOneBy({
                username: username,
            })),
        );
        return await this.userRepository.findOneBy({ username: username });
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async create(data: CreateUserDto): Promise<User> {
        const roles =
            data.roles?.split(',')?.map((role) => {
                if (!(role in Roles)) {
                    throw new BadRequestException('Invalid roles');
                }

                return Roles[role as keyof typeof Roles];
            }) ?? [];

        if (0 >= roles.length) {
            roles.push(Roles.ROLE_USER);
        }

        const encryptedPassword = await bcrypt.hash(
            data.password,
            await bcrypt.genSalt(),
        );

        let user = new User(data.username, encryptedPassword, roles);
        user = this.userRepository.create(user);
        return this.userRepository.save(user);
    }
}
