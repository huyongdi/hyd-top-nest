import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogTypeController } from './blogType.controller';
import { BlogTypeService } from './blogType.service';
import { BlogType, BlogTypeSchema } from './schemas/blogType.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: BlogType.name,
        schema: BlogTypeSchema,
      },
    ]),
  ],
  controllers: [BlogTypeController],
  providers: [BlogTypeService],
})
export class BlogTypeModule {}
