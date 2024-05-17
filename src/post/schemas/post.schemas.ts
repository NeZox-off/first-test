import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Post {
  @Prop({ required: true, unique: true })
  id: number;

  @Prop()
  username: string;

  @Prop()
  content: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
