import { MongooseModule } from "@nestjs/mongoose";
import { Module } from "@nestjs/common";;
import { UserService } from "./users.service"
import { UserRepository } from "./users.repository";
import { UserController } from "./users.controller";
import { User, UserSchema } from "./schemas/users.schema";

@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema}])],
    controllers: [ UserController ],
    providers: [ UserService, UserRepository]
})
export class UsersModule {}
