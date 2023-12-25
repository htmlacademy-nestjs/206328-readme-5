import { BaseMemoryRepository } from "@project/shared/core";
import { PostEntity } from "./post.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PostRepository extends BaseMemoryRepository<PostEntity> {}