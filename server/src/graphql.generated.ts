
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export abstract class IMutation {
    abstract createTodo(description: string): Todo | Promise<Todo>;
}

export abstract class IQuery {
    abstract todo(id: number): Todo | Promise<Todo>;
}

export class Todo {
    id: number;
    description?: string;
    completed: boolean;
    completedAt?: string;
    createdAt: string;
    updatedAt: string;
}
