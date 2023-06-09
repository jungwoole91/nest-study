import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class UndefinedToNullInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    // return next.handle().pipe(map((data) => ({ data, code: 'SUCCESS' }))); // 요청의 형식 바꿔주는 예제
    return next
      .handle()
      .pipe(map((data) => (data === undefined ? null : data)));
  }
}
