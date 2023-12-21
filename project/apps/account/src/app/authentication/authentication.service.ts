import { ConflictException, Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import { Role } from '@project/shared/app/types';

import { UserRepository } from '../user/user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { AUTH_USER_EXISTS } from './authentication.constant';
import { UserEntity } from '../user/user.entity';


@Injectable()
export class AuthenticationService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

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
}
