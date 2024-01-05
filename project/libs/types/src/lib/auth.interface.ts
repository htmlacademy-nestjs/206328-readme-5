import { User } from "./user.interface";

export interface Auth extends User {
    passwordHash: string;
}