import { BaseMemoryRepository } from "@project/shared/core";
import { UserEntity } from "./user.entity";

export class UserRepository extends BaseMemoryRepository<UserEntity> {}