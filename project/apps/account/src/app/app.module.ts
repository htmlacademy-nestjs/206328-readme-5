import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ConfigAccountModule } from '@project/config/account';

@Module({
  imports: [UserModule, AuthenticationModule, ConfigAccountModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
