import { Controller, Post, Body, Get, Param, HttpStatus, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostService } from './post.service';
import { fillDto } from '@project/shared/helpers';
import { CreatePostDto } from './dto/create-post-dto';
import { PostRdo } from './rdo/post.rdo';
import { PostEntity } from './post.entity';
import { UpdatePostDto } from './dto/update-post.dto';

@ApiTags('blog')
@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'The new post was successfully created.'
    })
    @Post('create')
    public async create(@Body() dto: CreatePostDto) {
        const newPost = await this.postService.createPost(dto);
        return fillDto(PostRdo, newPost.toPOJO());
    }

    @ApiResponse({
        type: PostRdo,
        status: HttpStatus.OK,
        description: 'Post found.'
    })
    @Get(':id')
    public async getPost(@Param('id') id: string) {
        const existPost = await this.postService.getPost({ id }) as PostEntity;
        return fillDto(PostRdo, existPost.toPOJO());
    }

    @ApiResponse({
        type: PostRdo,
        status: HttpStatus.OK,
        description: 'Post was successfully updated.'
    })
    @Put(':id')
    public async update(@Body() dto: UpdatePostDto) {
        const newPost = await this.postService.updatePost(dto);
        return fillDto(PostRdo, newPost.toPOJO());
    }

    @ApiResponse({
        type: PostRdo,
        status: HttpStatus.OK,
        description: 'Posts found.'
    })
    @Get('all')
    public async getPosts() {
        const posts = await this.postService.getPosts() as PostEntity[];
        return posts.map(item => fillDto(PostRdo, item.toPOJO()));
    }
}
