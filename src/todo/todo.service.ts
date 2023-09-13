import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoEntity } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
  ) {}

  async findAll(): Promise<TodoEntity[]> {
    return await this.todoRepository.find();
  }

  async findOne(id: number): Promise<TodoEntity> {
    return await this.todoRepository.findOne({ where: { id } });
  }

  async create(todo: TodoEntity): Promise<TodoEntity> {
    return await this.todoRepository.save(todo);
  }

  async update(id: number, todo: TodoEntity): Promise<TodoEntity> {
    await this.todoRepository.update(id, todo);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
