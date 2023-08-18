import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

type SignupBody = {
  id: string;
};

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  SignUp(@Body() body: SignupBody): void {
    this.userService.RegisterUserId(body.id);
  }
}
