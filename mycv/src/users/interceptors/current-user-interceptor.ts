import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { handleRetry } from '@nestjs/typeorm';
import { UsersService } from '../users.service';

@Injectable()
export class CurrentUserInterceptor implements NestInterceptor {
  constructor(private usersService: UsersService) {}
  async intercept(
    context: ExecutionContext,
    handler: CallHandler,
  ): Promise<any> {
    const request = context.switchToHttp().getRequest();
    const { userId } = request.session.userId || {};

    if (userId) {
      // requestオブジェクトはデコレーターからも参照可能
      // リクエストを受けた時点で、このインターセプターで、リクエストオブジェクトに予めログインしている自分をセットしておいて、
      // デコレーターはそれを返却する実装とする
      const user = await this.usersService.findOne(userId);
      request.CurrentUser = user;
    }

    return handler.handle();
  }
}
