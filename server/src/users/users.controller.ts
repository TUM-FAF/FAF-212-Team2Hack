import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    HttpCode,
    HttpStatus,
    UseInterceptors,
    UploadedFile, UseGuards, Query,
} from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {Observable, of} from "rxjs";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from 'multer'
import path from "path";
import {v4 as uuidv4} from 'uuid'
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {User} from "./entities/user.entity";

export type SuggestionsType = {
    university: string;
    school: string;
    username: string;
}

export const storage = {
    storage: diskStorage({
        destination: './uploads/profileImages',
        filename: (req, file, cb) => {
            const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
            const extension: string = path.parse(file.originalname).ext;

            cb(null, `${filename}${extension}`)
        }
    })
}

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @HttpCode(HttpStatus.CREATED)
    @Post()
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
       return await this.usersService.create(createUserDto);
    }

    @UseGuards(JwtAuthGuard)
    @Get('suggestions/?')
    findAll(@Query('university') university: string,@Query('school') school: string, @Query('username') username: string,) {
        console.log(username)
        return this.usersService.findAll(username, university, school);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('username') username: string) {
        return this.usersService.findOne(username);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() payload: UpdateUserDto) {
        return this.usersService.update(id, payload);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.usersService.delete(id);
    }

    @UseGuards(JwtAuthGuard)
    @Post('upload')
    @UseInterceptors(FileInterceptor('file', storage))
    uploadPicture(@UploadedFile() file): Observable<Object> {
        // return this.usersService.update()
        return of({imagePath: file.filename});
    }
}
