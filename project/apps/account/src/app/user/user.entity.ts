import { compare, genSalt, hash } from 'bcrypt';
import { Auth, Role } from '@project/types';
import { Entity } from '@project/core';
import { SALT_ROUNDS } from './user.constant';

export class UserEntity implements Auth, Entity<string> {
    public id?: string;
    public email: string;
    public firstName: string;
    public lastName: string;
    public dateOfBirth: Date;
    public role: Role;
    public passwordHash: string;
  
    constructor(user: Auth) {
      this.populate(user)
    }
  
    public toPOJO() {
      return {
        id: this.id,
        email: this.email,
        firstname: this.firstName,
        lastname: this.lastName,
        dateOfBirth: this.dateOfBirth,
        role: this.role,
        passwordHash: this.passwordHash,
      };
    }
  
    public populate(data: Auth): void {
      this.email = data.email;
      this.firstName = data.firstName;
      this.lastName = data.lastName;
      this.dateOfBirth = data.dateOfBirth;
      this.role = data.role;
      this.passwordHash = data.passwordHash;
    }

    public async setPassword(password: string): Promise<UserEntity> {
        const salt = await genSalt(SALT_ROUNDS);
        this.passwordHash = await hash(password, salt);
        return this;
    }

    public async comparePassword(password: string): Promise<boolean> {
        return compare(password, this.passwordHash);
    }
  
    static fromObject(data: Auth): UserEntity {
      return new UserEntity(data);
    }
  }