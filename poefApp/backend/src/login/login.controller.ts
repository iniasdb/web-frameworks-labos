import { Controller, Get, Param, Query } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {

    constructor(private loginSvc: LoginService) {}

    @Get("")
    async getAllUsers(@Query("id") id: number, @Query("pin") pin: number) {
        return await this.loginSvc.login(id, pin);
    }
}
