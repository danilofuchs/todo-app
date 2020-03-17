import { Injectable } from "@nestjs/common";
import { PrismaClient, Todo } from "@prisma/client";
import { Todo as DomainTodo } from "shared/interfaces/graphql";
const prisma = new PrismaClient();

@Injectable()
export class TodoService {
    async findOneById(id: number): Promise<DomainTodo | null> {
        const todo = await prisma.todo.findOne({
            where: {
                id,
            },
        });
        if (!todo) {
            return null;
        }
        return entityToDomain(todo);
    }

    async getAll(): Promise<DomainTodo[]> {
        const todos = await prisma.todo.findMany({
            first: 100,
        });
        return todos.map(entityToDomain);
    }

    async createTodo(props: { description: string }) {
        const todo = await prisma.todo.create({
            data: {
                description: props.description,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            },
        });
        return entityToDomain(todo);
    }
}

const entityToDomain = (entity: Todo): DomainTodo => ({
    ...entity,
    createdAt: entity.createdAt.toISOString() ?? undefined,
    updatedAt: entity.updatedAt.toISOString() ?? undefined,
    completedAt: entity.completedAt?.toISOString() ?? undefined,
    completed: !!entity.completedAt,
    description: entity.description ?? undefined,
});
