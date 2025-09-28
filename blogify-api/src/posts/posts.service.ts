import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from './post.model';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepository: Repository<PostEntity>,
    private readonly usersService: UsersService,
  ) {}

  async createPost(
    title: string,
    content: string,
    userId: string,
  ): Promise<PostEntity> {
    const user = await this.usersService.getUserById(userId);
    if (!user) {
      throw new Error('User not found');
    }
    const newPost = this.postRepository.create({ title, content, user });
    return this.postRepository.save(newPost);
  }
  async getAllPosts(): Promise<PostEntity[]> {
    return this.postRepository.find();
  }
  async getPostById(id: string): Promise<PostEntity | null> {
    return this.postRepository.findOneBy({ id });
  }

  async updatePost(
    id: string,
    title: string,
    content: string,
    published: boolean,
  ): Promise<PostEntity | null> {
    await this.postRepository.update(id, { title, content, published });
    return this.getPostById(id);
  }
}
