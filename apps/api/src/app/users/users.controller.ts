import { Body, Controller, Post, } from '@nestjs/common';
import { AuthResponse } from "./responseDto/authResponse.dto"
import { AuthRequest } from './requestDto/authRequest.dto';
import { RegisterResponse } from './responseDto/registerResponse.dto';
import { RegisterRequest } from './requestDto/registerRequest.dto';
import { UserService } from './users.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('login')
    async loginUser(@Body() authRequest: AuthRequest): Promise<AuthResponse> {
        const user = await this.userService.getUserByCredentials(authRequest.name, authRequest.password)
        return user ? { name: user.name, userId: user.userId, country: user.country } as AuthResponse : null;
    }

    @Post('register')
    async registerUser(@Body() registerRequest: RegisterRequest) : Promise<RegisterResponse> {
        const newUser = await this.userService.createUser(registerRequest.name,registerRequest.country, registerRequest.password)
        return newUser ? { name: newUser.name, userId: newUser.userId, country: newUser.country } as RegisterResponse : null;
    }
} 
