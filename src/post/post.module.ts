import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from './schemas/post.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'post', schema: PostSchema }])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
