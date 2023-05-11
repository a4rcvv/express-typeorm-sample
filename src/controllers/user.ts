import {
  Get,
  Req,
  Res,
  JsonController,
  Param,
  QueryParam,
  OnNull,
  QueryParams,
  NotFoundError,
  Post,
  Body,
  HttpCode,
  Delete,
  OnUndefined,
} from "routing-controllers";
import { appDataSource } from "@/dataSource";
import { User } from "@/entities/user";
import {
  UserResponse,
  GetUsersQuery,
  UsersResponse,
} from "@/types/controllers/user";

const repository = appDataSource.getRepository(User);

@JsonController("/user")
export class UserController {
  @Get()
  async getAll(@QueryParams() query: GetUsersQuery): Promise<UsersResponse> {
    const users = await repository
      .createQueryBuilder("user")
      .limit(query.limit)
      .offset(query.offset)
      .getMany();
    return { results: users };
  }
  @Get("/:id")
  async getOne(@Param("id") id: number): Promise<User> {
    const user = await repository.findOne({ where: { id: id } });
    if (!user) {
      throw new NotFoundError("user not found");
    }
    return user;
  }
  @HttpCode(201)
  @Post()
  async create(@Body({ required: true }) user: User): Promise<UserResponse> {
    const result = await repository.save(user);
    return { result: result };
  }

  @OnUndefined(204)
  @Delete("/:id")
  async delete(@Param("id") id: string): Promise<void> {
    await repository.delete(id);
  }
}
