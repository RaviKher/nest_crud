import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService) {}

    // @Get() 
    // getUsers() {
    //     return 'Hello';
    // }

    @Post()
    insertUser(@Body('name') name: string,@Body('age') age: number,@Body('email') email: string) {
        const userId = this.UsersService.insertUser(name, age, email);
        return {id:userId};
    }

    @Get()
    getAllUsers() {
        return this.UsersService.getUsers();
    }

    @Get(':userId')
    getUser(@Param('userId') userId: string) {
        return this.UsersService.getUser(userId);
    }

}
