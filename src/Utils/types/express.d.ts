import { Request } from 'express';
import UserPayload from 'src/Utils/Authentication/UserPayloadInterface';

declare module 'express-serve-static-core' {
    interface Request {
        user?: UserPayload; // Or define a proper User type
    }
}
