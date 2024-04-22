
import { Module, forwardRef } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JWT_CONFIG } from '../../constant/constants/jwt.constant';
import { UsersModule } from "../users/users.module";

@Module({
    imports: [
        forwardRef(()=>UsersModule),
        JwtModule.register({
            secret: "asdasd",
            signOptions: { expiresIn: "1d" }
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService]
})
export class AuthModule { }