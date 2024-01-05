export interface Post {
    text: string;
    author: string;
    timestamp?: number;
    likes?: string[];
    comments?: string[];
}