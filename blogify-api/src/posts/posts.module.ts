import { Module, Post } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './post.model';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])
],
controllers: [PostsController],
providers: [PostsService,UsersService],
})
export class PostsModule {}
