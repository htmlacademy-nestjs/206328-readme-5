import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user/user.repository';

@Injectable()
export class AuthenticationService {
    constructor(private readonly userRepository: UserRepository) {}
}
