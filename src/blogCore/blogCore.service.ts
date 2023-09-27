import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBlogDto } from './dto/create-blog.dto';
import { BlogCore } from './schemas/blogCore.schema';

@Injectable()
export class BlogCoreService {
  constructor(
    @InjectModel(BlogCore.name) private readonly blogModel: Model<BlogCore>,
  ) {}

  async create(createBlogDto: CreateBlogDto): Promise<BlogCore> {
    const createdBlog = await this.blogModel.create(createBlogDto);
    return createdBlog;
  }

  async update(createBlogDto: CreateBlogDto): Promise<number> {
    return this.blogModel.findByIdAndUpdate(
      { _id: createBlogDto._id },
      createBlogDto,
    );
  }

  async findAll(): Promise<BlogCore[]> {
    return this.blogModel.find().exec();
  }

  async findType(type: number): Promise<Array<BlogCore>> {
    return this.blogModel.find({ type }).exec();
  }

  async findOne(id: string): Promise<BlogCore> {
    return this.blogModel.findOne({ _id: id }).exec();
  }

  async delete(id: string) {
    const deletedCat = await this.blogModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedCat;
  }
}
