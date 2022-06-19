import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {UsersService} from "../users/users.service";

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private  jwtService: JwtService) {
    }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user && user.password === password) {
            return user;
        }

        return null;
    }
    async login(user: any) {
        const payload = { name: user.firstName, sub: user.uid};
        console.log(this.jwtService.sign(payload))
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
