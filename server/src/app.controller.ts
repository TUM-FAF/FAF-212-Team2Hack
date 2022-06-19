import {Controller, Get, Post, UseGuards, Request} from '@nestjs/common';
import {LocalAuthGuard} from "./auth/local-auth.guard";
import {AuthService} from "./auth/auth.service";
import {JwtAuthGuard} from "./auth/jwt-auth.guard";
import {UsersService} from "./users/users.service";
import {User} from "./users/entities/user.entity";

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService, private readonly usersService: UsersService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user); //return jwt access token
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req): Promise<User> { // require jwt && validate
    return this.usersService.findById(req.user.uid);
  }
}
