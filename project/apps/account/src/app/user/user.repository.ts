import { BaseMemoryRepository } from "@project/shared/core";
import { UserEntity } from "./user.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserRepository extends BaseMemoryRepository<UserEntity> {}