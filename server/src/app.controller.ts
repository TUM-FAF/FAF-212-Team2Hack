import {Controller, Get, Post, UseGuards, Request} from '@nestjs/common';
import {LocalAuthGuard} from "./auth/local-auth.guard";
import {AuthService} from "./auth/auth.service";
import {JwtAuthGuard} from "./auth/jwt-auth.guard";

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user); //return jwt access token
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(): string { // require jwt && validate
    return 'hi'
  }
}