import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from 'src/dto/create-post.dto';
import { UpdatePostDto } from 'src/dto/update-post.dto';
import { Post } from './schemas/post.schemas';

@Injectable()
export class PostService {
  constructor(@InjectModel('post') private postModel: Model<Post>) {}

  async getAll() {
    return await this.postModel.find().exec();
  }

  async create(dto: CreatePostDto): Promise<Post> {
    const createdPost = new this.postModel(dto);
    const findMaxId = await this.postModel.findOne().sort('-id');
    const maxId = findMaxId ? findMaxId.id : 0;
    createdPost.id = maxId + 1;
    return createdPost.save();
  }

  async getById(id: number) {
    return this.postModel.findOne({ id });
  }

  async update(id: number, dto: UpdatePostDto) {
    const post = await this.postModel.findOneAndUpdate(
      { id },
      {
        content: dto.content,
      },
    );
    return post;
  }

  async delete(id: number) {
    return this.postModel.findOneAndDelete({ id });
  }
}
