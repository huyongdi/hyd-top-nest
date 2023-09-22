import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlogType } from './schemas/blogType.schema';

@Injectable()
export class BlogTypeService {
  constructor(@InjectModel(BlogType.name) private readonly catModel: Model<BlogType>) {}

  async findAll(): Promise<BlogType[]> {
    return this.catModel.find().exec();
  }
}
