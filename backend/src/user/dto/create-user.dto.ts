import {IsEmail, IsString} from "class-validator"

export class CreateUserDto{
    @IsEmail()
    email:string

    @IsString()
    subject:string

    @IsString()
    message:string
}