import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class UsersService {
    private users: User[] = [];

    insertUser(name: string, age: number, email: string) {
        const id = uuidv4();
        const newUser = new User(id, name, age, email);

        this.users.push(newUser);

        return '1';
    }

    getUsers() {
        return [... this.users];
    }

    getUser(id: string) {
        return this.getUserById(id)[0];
    }

    private getUserById(id: string) {
        const index = this.users.findIndex((u) => u.id == id);
        return [this.users[index], index];
    }
}
