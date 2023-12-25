import { Post } from '@project/shared/app/types';
import { Entity } from '@project/shared/core';

export class PostEntity implements Post, Entity<string> {
    public id?: string;
    public text: string;
    public author: string;
    public timestamp: number;
    public likes: string[];
    public comments: string[];
  
    constructor(user: Post) {
      this.populate(user)
    }
  
    public toPOJO() {
      return {
        id: this.id,
        text: this.text,
        author: this.author,
        timestamp: this.timestamp,
        likes: this.likes,
        comments: this.comments
      };
    }
  
    public populate(data: Post): void {
      this.text = data.text;
      this.author = data.author;
      this.timestamp = +(new Date());
      this.likes = [];
      this.comments = [];
    }
  
  }