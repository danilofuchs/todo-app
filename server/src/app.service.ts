import { Injectable } from "@nestjs/common";
import { PrismaClient, Todo } from "@prisma/client";
const prisma = new PrismaClient();

@Injectable()
export class AppService {
    async getTodo(): Promise<Todo> {
        return await prisma.todo.create({
            data: {
                description: "Hello World",
            },
        });
    }
}
