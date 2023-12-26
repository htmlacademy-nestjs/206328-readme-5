import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { fillDto } from '@project/shared/helpers';
import { CreatePostDto } from './dto/create-post-dto';
import { PostRdo } from './rdo/post.rdo';
import { PostEntity } from './post.entity';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Post('create')
    public async create(@Body() dto: CreatePostDto) {
        const newPost = await this.postService.createPost(dto);
        return fillDto(PostRdo, newPost.toPOJO());
    }

    @Get(':id')
    public async getPost(@Param('id') id: string) {
        const existPost = await this.postService.getPost({ id }) as PostEntity;
        return fillDto(PostRdo, existPost.toPOJO());
    }
}
