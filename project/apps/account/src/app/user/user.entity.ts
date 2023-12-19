import { Auth, Role } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';

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
    }
  
  }