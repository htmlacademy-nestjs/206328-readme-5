export class UpdatePostDto {
    public id: string;
    public text: string;
    public author: string;
    public timestamp: number;
    public likes: string[];
    public comments: string[];
}
