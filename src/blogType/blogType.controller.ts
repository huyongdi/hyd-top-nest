import { Controller, Get } from '@nestjs/common';
import { BlogTypeService } from './blogType.service';
import { BlogTypeSchema, BlogType } from './schemas/blogType.schema';

@Controller('blogType')
export class BlogTypeController {
  constructor(private readonly blogTypeService: BlogTypeService) {}

  @Get()
  async findAll(): Promise<BlogType[]> {
    return this.blogTypeService.findAll();
  }
}
