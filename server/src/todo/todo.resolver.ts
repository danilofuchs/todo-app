import { Resolver, Query, Args } from "@nestjs/graphql";
import { TodoService } from "./todo.service";
import { Todo } from "../graphql.generated";

@Resolver("Todo")
export class TodoResolver {
    constructor(private todoService: TodoService) {}

    @Query()
    async todo(@Args("id") id: number): Promise<Todo | null> {
        const todo = await this.todoService.findOneById(id);
        if (!todo) {
            return null;
        }
        return {
            ...todo,
            createdAt: todo.createdAt.toISOString() ?? undefined,
            updatedAt: todo.updatedAt.toISOString() ?? undefined,
            completedAt: todo.completedAt?.toISOString() ?? undefined,
            completed: !!todo.completedAt,
            description: todo.description ?? undefined,
        };
    }
}
