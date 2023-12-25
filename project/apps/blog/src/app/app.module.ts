import { Module } from '@nestjs/common';
import { MediaModule } from './media/media.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [MediaModule, PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
