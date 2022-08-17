import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports: [PassportModule, UsersModule],
})
export class AuthModule {}
