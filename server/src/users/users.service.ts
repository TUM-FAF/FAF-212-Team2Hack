import {Injectable} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {UpdateUserDto} from './dto/update-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";
import {Repository, UpdateResult} from "typeorm";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>) {
    }

    async create(createUserDto: CreateUserDto): Promise<void> {
        await this.usersRepository.save(createUserDto);
    }

    async findAll(user: User): Promise<User[]> {
        const query = this.usersRepository.createQueryBuilder('user')
            .where('user.username != :username AND (user.university = :university OR user.school = :school)', {
                username: user.username, university: user.university,
                school: user.school
            });
        return await query.getMany();
    }

    findOne(username: string): Promise<User> {
        return this.usersRepository.findOne({where: {username: username}});
    }

    findById(id: string): Promise<User> {
        return this.usersRepository.findOne({where: {uid: id}});
    }

    update(id: string, payload: UpdateUserDto): Promise<UpdateResult> {
        return this.usersRepository.update(id, payload);
    }

    async delete(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }
}
