import { Expose } from 'class-transformer';

export class PostRdo {
    @Expose()
    public id: string;

    @Expose()
    public text: string;

    @Expose()
    public author: string;

    @Expose()
    public timestamp: number;

    @Expose()
    public likes: string[];

    @Expose()
    public comments: string[];
}