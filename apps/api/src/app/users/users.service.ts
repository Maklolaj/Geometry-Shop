import { Injectable } from "@nestjs/common";
import { User } from "./schemas/users.schema"
import { UserRepository } from "./users.repository"
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async getUserByCredentials(name:string, password: string): Promise<User> {
        return this.userRepository.findOne({ name, password })        
    }

    async createUser(name: string, country: string, password: string): Promise<User> {
        return this.userRepository.create({
            userId: uuidv4(),
            name: name,
            country: country,
            password: password,
        })
    }
}
