import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { UserEntity } from './user';
import { UserService } from './users.service';


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get() 
    async fillAll(){
        const response = await this.userService.findAll();
        return response;
    }

    // @Get(':id') 
    // async findOne(@Param() id: number){
    //     const response = await this.userService.findOne(id);
    //     return response;
    // }
    @Post()
    async create(@Body() createUserDto: UserEntity) {
        const response = await this.userService.create(createUserDto);
        return response;
    }

    @Put(":id")
    async update(@Param() id: number, @Body() createUserDto: UserEntity) {
        const response = await this.userService.update(id ,createUserDto);
        return response;
    }

    @Delete()
    async delete(@Body() id: number) {
        const response = await this.userService.remove(id);
        return response;
    }

    // @Get()
    // getAllUsers() {
    //     return this.UserService.getUsers();
    // }

    // @Get(':userId')
    // getUser(@Param('userId') userId: string) {
    //     return this.UserService.getUser(userId);
    // }

}