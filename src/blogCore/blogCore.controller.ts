import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BlogCoreService } from './blogCore.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { BlogCore } from './schemas/blogCore.schema';

@Controller('blogCore')
export class BlogCoreController {
  constructor(private readonly blogCoreService: BlogCoreService) {}

  @Post()
  async create(@Body() createBlogDto: CreateBlogDto) {
    await this.blogCoreService.create(createBlogDto);
    return '新建成功'
  }

  @Get()
  async findAll(): Promise<BlogCore[]> {
    return this.blogCoreService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<BlogCore> {
    return this.blogCoreService.findOne(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.blogCoreService.delete(id);
  }
}