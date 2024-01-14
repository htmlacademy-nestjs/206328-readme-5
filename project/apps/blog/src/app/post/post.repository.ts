import { BaseMemoryRepository } from "@project/core";
import { PostEntity } from "./post.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PostRepository extends BaseMemoryRepository<PostEntity> {}