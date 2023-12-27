import { Injectable } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { CreatePostDto } from './dto/create-post-dto';
import { DeletePostDto } from './dto/delete-post-dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { GetPostDto } from './dto/get-post.dto';
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

    public async updatePost(dto: UpdatePostDto) {
        const { id, ...rest } = dto;

        const postEntity = await new PostEntity(rest);

        return this.postRepository.update(id, postEntity);
    }

    public async getPosts() {
        return this.postRepository.get();
    }

    public async getPost(dto: GetPostDto) {
        const { id } = dto;
        return this.postRepository.get(id);
    }

}
