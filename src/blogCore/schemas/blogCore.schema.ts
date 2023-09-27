import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogCoreDocument = BlogCore & Document;

@Schema()
export class BlogCore extends Document {
  @Prop({ required: true })
  type: number;

  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop()
  createTime: string;
}

export const BlogCoreSchema = SchemaFactory.createForClass(BlogCore);
