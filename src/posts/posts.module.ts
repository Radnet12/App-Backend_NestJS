import { SequelizeModule } from "@nestjs/sequelize";
import { Module } from "@nestjs/common";
import { User } from "src/users/users.model";
import { PostsController } from "./posts.controller";
import { Post } from "./posts.model";
import { PostsService } from "./posts.service";
import { FilesModule } from "src/files/files.module";

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [SequelizeModule.forFeature([User, Post]), FilesModule],
})
export class PostsModule {}
