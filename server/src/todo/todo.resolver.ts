import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { TodoService } from "./todo.service";
import { Todo, CreateTodoInput } from "shared/interfaces/graphql";

@Resolver()
export class TodoResolver {
    constructor(private todoService: TodoService) {}

    @Query()
    async todos(): Promise<Todo[]> {
        return await this.todoService.getAll();
    }

    @Mutation("createTodo")
    async createTodo(@Args("input") input: CreateTodoInput): Promise<Todo> {
        return await this.todoService.createTodo({
            description: input.description,
        });
    }
}
