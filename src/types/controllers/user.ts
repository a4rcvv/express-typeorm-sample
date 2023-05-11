import { User } from "@/entities/user";
import { IsPositive, IsInt, Min, IsOptional } from "class-validator";

export class GetUsersQuery {
  @Min(0)
  @IsInt()
  offset = 0;

  @IsOptional()
  @IsPositive()
  @IsInt()
  limit = 10;
}

export type UsersResponse = {
  results: User[];
};

export type UserResponse = {
  result: User;
};
