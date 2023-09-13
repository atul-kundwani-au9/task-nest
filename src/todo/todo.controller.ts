import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
  } from '@nestjs/common';
  import { TodoService } from './todo.service';
  import { TodoEntity } from './todo.entity';
  
  @Controller('todos')
  export class TodoController {
    constructor(private readonly todoService: TodoService) {}
  
    @Get()
    findAll(): Promise<TodoEntity[]> {
      return this.todoService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number): Promise<TodoEntity> {
      return this.todoService.findOne(id);
    }
  
    @Post()
    create(@Body() todo: TodoEntity): Promise<TodoEntity> {
      return this.todoService.create(todo);
    }
  
    @Put(':id')
    update(@Param('id') id: number, @Body() todo: TodoEntity): Promise<TodoEntity> {
      return this.todoService.update(id, todo);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
      return this.todoService.remove(id);
    }
  }
  