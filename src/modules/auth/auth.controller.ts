import { BadRequestException, Body, Controller, ForbiddenException, HttpStatus, NotFoundException, Post, Req, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";
import *as bcrypt from "bcrypt";
import { JWT_CONFIG } from "src/constant/jwt.constant";
import { DataToken } from "src/interfaces/data-token.interface";

@Controller('auth')
export class AuthController {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ) { };

    @Post('register')
    async register(@Body() body: RegisterDto) {
        const result = await this.userService.createNewUser(body);
        return {
            statusCode: HttpStatus.CREATED,
            message: "Register successfully",
            data: result
        }
    }

    
    @Post('login')
    async login(@Body() body:LoginDto) {
        const user = await this.userService.login(body);
        
    if(!user) {
        throw new NotFoundException('Tài khoản không tồn tại');
      }
      if(!user.is_active){
        throw new ForbiddenException('Tài khoản đã bị khóa');
      }
  
      if(!bcrypt.compareSync(body.password, user.password)) {
        throw new UnauthorizedException('Sai số điện thoại hoặc mật khẩu');
      }

      const [accessToken, refreshToken] = await this.generatesToken({ id: user.id, role: user.role });  
      delete user.password;

      return {
        statusCode: HttpStatus.OK,
        message: "Login successfully",
        data: {...user, accessToken, refreshToken}
      }
    }

    @Post('refresh_token')
    async refreshToken(@Req() request: Request) {
        const authHeader = request.headers['authorization'];
        const token = authHeader.substring(7);
        if (!token) {
            throw new UnauthorizedException("Missing token");
        }
        const infoToken = await this.jwtService.verifyAsync(token, { secret: process.env.REFRESH_KEY });
        const { id, role } = infoToken;
        const [accessToken, refreshToken] = await this.generatesToken({ id, role });
        return {
            statusCode: HttpStatus.OK,
            message: "Refresh token successfully",
            data: { accessToken, refreshToken }
        }
    }

    private generatesToken = async (data:DataToken) => {
        const accessToken = await this.jwtService.signAsync(data);
        const refreshToken = await this.jwtService.signAsync(data, { expiresIn: process.env.REFRESH_TIME, secret: process.env.REFRESH_KEY });
        return [accessToken, refreshToken];
    }
    
}