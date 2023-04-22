import {
  Body,
  Controller,
  Header,
  HttpCode,
  HttpStatus,
  Request,
  Post,
  UseGuards,
  Get,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import { LocalAuthGuard } from '../auth/local.auth.guard';
import { AuthenticatedGuard } from '../auth/authenticated.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-Type', 'application/json')
  createUser(@Body() user: CreateUserDto) {
    return this.usersService.create(user);
  }

  @Post('/login')
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Header('Content-Type', 'application/json')
  login(@Request() req) {
    return { user: req.user, message: 'Login successful' };
  }

  @Get('/login-check')
  @UseGuards(AuthenticatedGuard)
  @HttpCode(HttpStatus.OK)
  @Header('Content-Type', 'application/json')
  loginCheck(@Request() req) {
    return req.user;
  }

  @Get('/logout')
  @HttpCode(HttpStatus.OK)
  @Header('Content-Type', 'application/json')
  logOut(@Request() req) {
    req.session.destroy();
    return { message: 'Logout successful' };
  }
}
