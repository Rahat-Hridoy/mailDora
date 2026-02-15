import { IsOptional, IsString } from "class-validator";

export class UpdateUserDto{
    @IsOptional()
    @IsString()
    subject?:string

    @IsOptional()
    @IsString()
    message?:string
}