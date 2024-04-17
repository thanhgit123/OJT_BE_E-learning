import {
  HttpCode,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { SignUpDto } from './dto/auth.dto';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/modules/users/users.service';
import { UserRoleService } from 'src/modules/user_role/user_role.service';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly userRole: UserRoleService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(body: SignUpDto) {
    const { password, ...rest } = body;
    /** logic max hoa password */
    const hashPassword = await argon2.hash(password);

    const newUser = {
      ...rest,
      password: hashPassword,
    };

    await this.userService.createUser(newUser);
    await this.userRole.createUserRole({ user_id: newUser.id, role_id: 1 });
    return {
      message: 'Đăng Ký Thành Công',
    };
  }

  async signIn(userInfo) {
    /** check thong tin user */

    const user = await this.userService.getUserByEmail(userInfo.phone);

    const isMatch =
      user && (await argon2.verify(user.password, userInfo.password));

    if (!user || !isMatch) {
      throw new HttpException(
        'Incorrect email or password',
        HttpStatus.BAD_REQUEST,
      );
    }

    /** san sinh token  */
    return {user,
      token: await this.generateAccessToken({
        phone: user.phone,
        id: user.id,
      }),
    };
  }

  async generateAccessToken(payload) {
    return this.jwtService.sign(payload, {
      expiresIn: '1d',
      secret: 'token',
    });
  }

  verifyAccessToken(token) {
    return this.jwtService.verify(token, {
      secret: 'token',
    });
  }
}
