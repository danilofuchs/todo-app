
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateTodoInput {
    description: string;
}

export abstract class IMutation {
    abstract createTodo(input?: CreateTodoInput): Todo | Promise<Todo>;
}

export abstract class IQuery {
    abstract todos(): Todo[] | Promise<Todo[]>;
}

export class Todo {
    id: number;
    description?: string;
    completed: boolean;
    completedAt?: string;
    createdAt: string;
    updatedAt: string;
}
