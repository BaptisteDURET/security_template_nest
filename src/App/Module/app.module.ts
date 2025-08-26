import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '../Controller/app.controller';
import { AppService } from '../app.service';
import { UserModule } from './user.module';
import { AuthenticationModule } from './auth.module';
import { JwtModule } from '@nestjs/jwt';
import { TestController } from '../Controller/guard.controller';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: (process.env.DB_TYPE as 'postgres') || 'postgres',
            host: 'database',
            port: Number(process.env.POSTGRES_PORT ?? 5432),
            username: 'postgres',
            password: 'postgres',
            database: 'security_template_nest',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
            autoLoadEntities: true,
            logging: true,
        }),
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '1h' },
        }),
        UserModule,
        AuthenticationModule,
    ],

    controllers: [AppController, TestController],
    providers: [AppService],
})
export class AppModule {}
