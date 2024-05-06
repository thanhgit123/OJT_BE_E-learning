import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Role } from 'src/constant/enum';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const decoded = this.jwtService.verify(token);
      request.user = decoded;
      const check = +decoded.role === +Role.ADMIN ? true : false;
      if (!check) {
        throw new ForbiddenException('Bạn không có quyền truy cập');
      }
      return check;
    } catch (error) {
      throw new ForbiddenException('Bạn không có quyền truy cập');
    }
  }
}
