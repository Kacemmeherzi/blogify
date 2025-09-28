import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.model';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  createUser(user: Partial<UserEntity>): Promise<UserEntity> {
    const newUser = this.usersRepository.create(user);
    return this.usersRepository.save(newUser);
  }
  getAllUsers(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }
  getUserById(id: string): Promise<UserEntity | null> {
    return this.usersRepository.findOneBy({ id });
  }
}
