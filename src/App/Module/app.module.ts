import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '../Controller/app.controller';
import { AppService } from '../app.service';
import { UserModule } from './user.module';
// import { ProtectedModule } from './protected.module';

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
        UserModule,
        // ProtectedModule,
    ],

    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
