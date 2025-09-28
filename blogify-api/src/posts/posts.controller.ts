import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostEntity } from './post.model';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPosts() {
    return this.postsService.getAllPosts();
  }
  @Get('/:id')
  getPostById(@Param('id') id: string) {
    return this.postsService.getPostById(id);
  }
  @Post()
  CreatePost(@Body() Body: CreatePostDto) {
    if (!Body.title || !Body.content) {
      throw new Error('Title and Content are required');
    }
    return this.postsService.createPost(Body.title, Body.content, Body.userId);
  }
}
export interface CreatePostDto {
  title: string;
  content: string;
  userId: string;
}
