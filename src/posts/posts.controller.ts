import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { CreatePostDto } from "./dto/CreatePost.dto";
import { PostsService } from "./posts.service";

@Controller("posts")
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  @UseInterceptors(FileInterceptor("image"))
  createPost(@Body() dto: CreatePostDto, @UploadedFile() image) {
    return this.postsService.createPost(dto, image);
  }
}
