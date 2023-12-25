import { Injectable } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { CreatePostDto } from './dto/create-post-dto';
import { DeletePostDto } from './dto/delete-post-dto';
import { PostEntity } from './post.entity';

@Injectable()
export class PostService {
    constructor(private readonly postRepository: PostRepository ) {}

    public async createPost(dto: CreatePostDto) {
        const { text, author } = dto;
    
        const post = {
            text, author
        };
    
        const postEntity = await new PostEntity(post)
    
    
        return this.postRepository
          .save(postEntity);
    }

    public async deletePost(dto: DeletePostDto) {
        const { id } = dto;

        return this.postRepository.deleteById(id);
    }

    
}
