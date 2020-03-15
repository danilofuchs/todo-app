import React from "react";
import { Todo } from "interfaces/Todo";

interface Props {
    todos: Todo[];
}
export default function TodoList(props: Props) {
    const { todos } = props;
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.description}</li>
            ))}
        </ul>
    );
}
