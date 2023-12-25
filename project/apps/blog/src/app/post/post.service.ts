import { Injectable } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { CreatePostDto } from './dto/create-post-dto';
import { PostEntity } from './post.entity';

@Injectable()
export class PostService {
    constructor(private readonly postRepository: PostRepository ) {}

    public async register(dto: CreatePostDto) {
        const { text, author } = dto;
    
        const post = {
            text, author
        };
    
        const postEntity = await new PostEntity(post)
    
    
        return this.postRepository
          .save(postEntity);
    }
}
