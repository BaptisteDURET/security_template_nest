import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';
import UserPayload from './UserPayloadInterface';

@Injectable()
export class AuthenticationGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest<Request>();
        const token = this.extractTokenFromHeader(request);
        console.log(token);

        if (!token) {
            throw new UnauthorizedException();
        }

        try {
            const payload = this.jwtService.verify<UserPayload>(token, {
                secret: process.env.JWT_SECRET,
            });
            request.user = payload;

            return true;
        } catch (error) {
            throw new UnauthorizedException(error);
        }
    }
    private extractTokenFromHeader(request: Request): string | null {
        const authHeader = request.headers['authorization'];
        if (!authHeader) return null;

        const [bearer, token] = authHeader.split(' ');
        return bearer === 'Bearer' && token ? token : null;
    }
}
