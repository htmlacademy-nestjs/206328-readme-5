import { ApiProperty } from "@nestjs/swagger";

export class UpdatePostDto {
    @ApiProperty({
        description: 'post unique id',
        example: 'kj34j345j-k3k4k53-k34k5ks'
    })
    public id: string;

    @ApiProperty({
        description: 'text of the post',
        example: 'kj34j345j-k3k4k53-k34k5ks'
    })
    public text: string;

    @ApiProperty({
        description: 'author of the post',
        example: 'kj34j345j-k3k4k53-k34k5ks'
    })
    public author: string;

    @ApiProperty({
        description: 'date of the post',
        example: '41234213412'
    })
    public timestamp: number;

    @ApiProperty({
        description: 'id of users',
        example: '[loco, bank, bob, sam]'
    })
    public likes: string[];

    @ApiProperty({
        description: 'id of posts',
        example: '[post1, post2, post3, post4]'
    })
    public comments: string[];
}
