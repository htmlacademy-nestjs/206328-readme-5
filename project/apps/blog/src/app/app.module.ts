import { Module } from '@nestjs/common';
import { MediaModule } from './media/media.module';
import { PostModule } from './post/post.module';
import { CommentsModule } from './comments/comments.module';
import { SearchModule } from './search/search.module';
import { TagsModule } from './tags/tags.module';
import { RepostModule } from './repost/repost.module';

@Module({
  imports: [
    MediaModule,
    PostModule,
    CommentsModule,
    SearchModule,
    TagsModule,
    RepostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
