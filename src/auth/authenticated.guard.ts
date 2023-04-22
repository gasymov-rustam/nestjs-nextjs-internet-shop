import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class AuthenticatedService implements CanActivate {
  canActivate = async (context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();

    return request.IsAuthenticated();
  };
}
