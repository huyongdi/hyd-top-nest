import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogCoreController } from './blogCore.controller';
import { BlogCoreService } from './blogCore.service';
import { BlogCore, BlogCoreSchema } from './schemas/blogCore.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: BlogCore.name,
        schema: BlogCoreSchema,
      },
    ]),
  ],
  controllers: [BlogCoreController],
  providers: [BlogCoreService],
})
export class BlogCoreModule {}
