import React from 'react';
import { Todo } from '../model';

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<Props> = ({todo,todos, setTodos}) => {
    return (
        <div>

        </div>
    )
}
export default SingleTodo;