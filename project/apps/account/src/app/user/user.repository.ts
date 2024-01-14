import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseMongoRepository } from '@project/core';
import { UserEntity } from './user.entity';
import { BlogUserModel } from './blog-user.model';

@Injectable()
export class UserRepository extends BaseMongoRepository<UserEntity, BlogUserModel> {
  constructor(
    @InjectModel(BlogUserModel.name) blogUserModel: Model<BlogUserModel>
  ) {
    super(blogUserModel, UserEntity.fromObject);
  }
  public async findByEmail(email: string): Promise<UserEntity | null> {
    const document = await this.model.findOne({ email }).exec();
    return this.createEntityFromDocument(document);
  }
}
