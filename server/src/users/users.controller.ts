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
    UploadedFile,
} from '@nestjs/common';
import {UsersService} from './users.service';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {Observable, of} from "rxjs";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from 'multer'
import path from "path";
import {v4 as uuidv4} from 'uuid'


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
    async create(@Body() createUserDto: CreateUserDto): Promise<void> {
        await this.usersService.create(createUserDto);
    }

    @Get('')
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() payload: UpdateUserDto) {
        return this.usersService.update(id, payload);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.usersService.delete(id);
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', storage))
    uploadPicture(@UploadedFile() file): Observable<Object> {
      // return this.usersService.update()
        return of({imagePath: file.filename});
    }
}
