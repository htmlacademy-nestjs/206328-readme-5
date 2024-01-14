import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserRepository } from './user.repository';
import { BlogUserModel, BlogUserSchema } from './blog-user.model';

@Module({
  imports: [MongooseModule.forFeature([
    { name: BlogUserModel.name, schema: BlogUserSchema }
  ])],
  providers: [UserRepository],
  exports: [UserRepository],
})
export class UserModule {}
