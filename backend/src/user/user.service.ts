import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
    constructor(private prisma:PrismaService){}

    //create 
    async create(data: CreateUserDto){
        return this.prisma.user.create({data})
    }

    // Find all
    async findAll(){
        return this.prisma.user.findMany();
    }

    // Find one
    // Find one
    async findOne(id: number) {
        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user) throw new NotFoundException('User not found');
        return user;
    }

    // Update
    async update(id: number, data: UpdateUserDto) {
        await this.findOne(id);
        return this.prisma.user.update({ where: { id }, data });
    }

    // Delete
    async remove(id: number) {
        await this.findOne(id);
        return this.prisma.user.delete({ where: { id } });
    }



    
}
