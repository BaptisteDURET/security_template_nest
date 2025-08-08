import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AuthenticationGuard } from './AuthenticationGuard';
import { RolesGuard } from './RolesGuard';

export function Authentication(...roles: string[]) {
    return applyDecorators(
        SetMetadata('roles', roles),
        UseGuards(AuthenticationGuard, RolesGuard),
        ApiBearerAuth(),
        ApiUnauthorizedResponse(),
    );
}
