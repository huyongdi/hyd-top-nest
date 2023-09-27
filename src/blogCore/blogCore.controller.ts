import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { BlogCoreService } from './blogCore.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { BlogCore } from './schemas/blogCore.schema';
import * as moment from 'moment';

@Controller('blogCore')
export class BlogCoreController {
  constructor(private readonly blogCoreService: BlogCoreService) {}

  @Post()
  async create(@Body() createBlogDto: CreateBlogDto) {
    if (createBlogDto._id) {
      createBlogDto.updateTime = moment().format('YYYY-MM-DD hh:mm:ss');
      await this.blogCoreService.update(createBlogDto);
      return '编辑成功';
    } else {
      createBlogDto.createTime = moment().format('YYYY-MM-DD hh:mm:ss');
      await this.blogCoreService.create(createBlogDto);
      return '新建成功';
    }
  }

  @Get()
  async findAll(@Query('type') type): Promise<BlogCore[]> {
    if (type) {
      return this.blogCoreService.findType(type);
    }
    return this.blogCoreService.findAll();
  }

  // // 冒号是动态ID
  // @Get(':type')
  // async findOne(@Param('type') type: number): Promise<Array<BlogCore>> {
  //   console.log('----------------------------调用');
  //   return this.blogCoreService.findType(type);
  // }

  // @Delete(':id')
  // async delete(@Param('id') id: string) {
  //   return this.blogCoreService.delete(id);
  // }
}
