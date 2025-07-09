import { applyDecorators } from '@nestjs/common';

export function Authentication(...roles: string[]) {
  return applyDecorators();
}
