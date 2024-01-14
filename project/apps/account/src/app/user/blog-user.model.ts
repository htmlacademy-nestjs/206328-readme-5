import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Auth, Role } from '@project/types';

@Schema({
  collection: 'accounts',
  timestamps: true,
})
export class BlogUserModel extends Document implements Auth {
  @Prop()
  public avatar: string;

  @Prop({
    required: true,
  })
  public dateOfBirth: Date;

  @Prop({
    required: true,
    unique: true,
  })
  public email: string;

  @Prop({
    required: true,
  })
  public firstName: string;

  @Prop({
    required: true,
  })
  public lastName: string;

  @Prop({
    required: true,
  })
  public passwordHash: string;

  @Prop({
    required: true,
    type: String,
    enum: Role,
    default: Role.User,
  })
  public role: Role;
}

export const BlogUserSchema = SchemaFactory.createForClass(BlogUserModel);
