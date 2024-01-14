import { ApiProperty } from "@nestjs/swagger";

export class GetPostDto {
    @ApiProperty({
        description: 'post unique id',
        example: 'kj34j345j-k3k4k53-k34k5ks'
    })
    public id: string;
}