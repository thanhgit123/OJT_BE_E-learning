import { ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class AuthorGuard {

    canActivate(context: ExecutionContext,role:number):Promise<boolean> | boolean{
        const request = context.switchToHttp().getRequest();
       const responce = context.switchToHttp().getResponse();

       const token = request.headers.authorization
       if(!token?.startsWith("Bearer")) throw new UnauthorizedException("please login");
       return
    }
}