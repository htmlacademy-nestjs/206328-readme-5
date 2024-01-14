import { ConflictException, Injectable, NotFoundException, UnauthorizedException, Inject } from '@nestjs/common';
import dayjs from 'dayjs';
import { Role } from '@project/types';
import { ConfigType } from '@nestjs/config';
import { dbConfig } from '@project/config/account'
import { UserRepository } from '../user/user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { AUTH_USER_EXISTS, AUTH_USER_NOT_FOUND, AUTH_USER_PASSWORD_WRONG } from './authentication.constant';
import { UserEntity } from '../user/user.entity';
import { LoginUserDto } from './dto/login-user.dto';


@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userRepository: UserRepository,

    @Inject(dbConfig.KEY)
    private readonly databaseConfig: ConfigType<typeof dbConfig>
  ) {
    // Извлекаем настройки из конфигурации
    console.log(databaseConfig.host);
    console.log(databaseConfig.user);
  }

  public async register(dto: CreateUserDto) {
    const {email, firstname, lastname, password, dateBirth} = dto;

    const blogUser = {
      email, firstName: firstname, lastName: lastname, role: Role.User,
      avatar: '', dateOfBirth: dayjs(dateBirth).toDate(),
      passwordHash: ''
    };

    const existUser = await this.userRepository
      .findByEmail(email);

    if (existUser) {
      throw new ConflictException(AUTH_USER_EXISTS);
    }

    const userEntity = await new UserEntity(blogUser)
      .setPassword(password)

    return this.userRepository
      .save(userEntity);
  }

  public async verifyUser(dto: LoginUserDto) {
    const {email, password} = dto;
    const existUser = await this.userRepository.findByEmail(email);

    if (!existUser) {
      throw new NotFoundException(AUTH_USER_NOT_FOUND);
    }

    if (!await existUser.comparePassword(password)) {
      throw new UnauthorizedException(AUTH_USER_PASSWORD_WRONG);
    }

    return existUser;
  }

  public async getUser(id: string) {
    const existUser = await this.userRepository.findById(id);

    if (! existUser) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return existUser;
  }
}
}
