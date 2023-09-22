import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BlogTypeDocument = BlogType & Document;

@Schema()
export class BlogType extends Document {
  @Prop({ required: true })
  id: number;

  @Prop()
  name: string;
}

export const BlogTypeSchema = SchemaFactory.createForClass(BlogType);