import { Body, Post, Controller } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CreateUserDto } from './dto/create-user.dto';
import { fillDto } from '@project/shared/helpers';
import { UserRdo } from './rdo/user.rdo';

@Controller('authentication')
export class AuthenticationController {
    constructor(private readonly authServis: AuthenticationService) {}

    @Post('register')
    public async create(@Body() dto: CreateUserDto) {
        const newUser = await this.authServis.register(dto);
        return fillDto(UserRdo, newUser.toPOJO());
    }
}
