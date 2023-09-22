import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { BlogTypeModule } from './blogType/blogType.module';
import { ConfigModule } from '@nestjs/config';
import { BlogCoreModule } from './blogCore/blogCore.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ydhutop'),
    // CatsModule,
    BlogTypeModule,
    BlogCoreModule,
    ConfigModule.forRoot(),
  ],
})
export class AppModule {}
