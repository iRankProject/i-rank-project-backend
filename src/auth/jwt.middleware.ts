import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  async use(req: any, _: any, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];

    if (token) {
      const decoded = jwt.decode(token);
      const userId = decoded.sub;
      req.user = { id: userId };
      console.log('req.user', req.user);
    }
    next();
  }
}
