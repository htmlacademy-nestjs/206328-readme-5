import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty({
        description: 'text of the post',
        example: 'hellow world!'
    })
    public text: string;

    @ApiProperty({
        description: 'user identifier',
        example: 'user@loco.bank'
    })
    public author: string;
}