import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { TodoService } from "./todo.service";
import { Todo } from "../graphql.generated";

@Resolver("Todo")
export class TodoResolver {
    constructor(private todoService: TodoService) {}

    @Query()
    async todo(@Args("id") id: number): Promise<Todo | null> {
        return await this.todoService.findOneById(id);
    }

    @Mutation("createTodo")
    async createTodo(@Args("description") description: string): Promise<Todo> {
        return await this.todoService.createTodo({ description });
    }
}
