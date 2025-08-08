import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthenticationGuard } from 'src/Utils/Authentication/AuthenticationGuard';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET || 'your_secret_key',
            signOptions: { expiresIn: '1h' },
        }),
    ],
    providers: [
        {
            provide: APP_GUARD,
            useClass: AuthenticationGuard,
        },
    ],
})
export class ProtectedModule {}
