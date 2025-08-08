import { BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthenticationDto } from 'src/Domain/Business/Authentication/auth.dto';
import { User } from 'src/Domain/Model/User.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

export class AuthenticationService {
    AUTHENTICATION_ERROR = 'Invalid username or password';

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async authenticate(data: AuthenticationDto) {
        const user = await this.userRepository.findOneBy({
            username: data.username,
        });

        if (!(user instanceof User)) {
            throw new BadRequestException(this.AUTHENTICATION_ERROR);
        }

        const validPass = await bcrypt.compare(data.password, user.password);

        if (!validPass) {
            throw new BadRequestException(this.AUTHENTICATION_ERROR);
        }
    }
}
