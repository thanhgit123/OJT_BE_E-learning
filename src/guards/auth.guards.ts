import { DataToken } from './../interfaces/data-token.interface';
import { JwtService } from '@nestjs/jwt';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JWT_CONFIG } from 'src/constant/jwt.constant';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private JwtService: JwtService) {}
  async canActivate(
    context: ExecutionContext,
  ):  Promise<boolean>  {
    const request = context.switchToHttp().getRequest();

    //Get token from header
    const token = request.headers.authorization.split(' ')[1];

    //jwt verify Token
    if(!token) throw new ForbiddenException('Token not found');
    try {
     const payload =  await this.JwtService.verifyAsync(token, { secret: JWT_CONFIG.ACCESS_KEY });
    } catch (error) {
     throw new UnauthorizedException('Token not valid');
    }

    return true;
  }
}
