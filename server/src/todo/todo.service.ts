import { Injectable } from "@nestjs/common";
import { PrismaClient, Todo } from "@prisma/client";
const prisma = new PrismaClient();

@Injectable()
export class TodoService {
    async findOneById(id: number): Promise<Todo | null> {
        return await prisma.todo.findOne({
            where: {
                id,
            },
        });
    }
}
