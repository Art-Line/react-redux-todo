import {useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {

    const todos = useSelector(state => state.todos.todos)

    return (
        <ul className="todo">
            {todos.map(item => (
                <TodoItem key={item.id} item={item} />
            ))}
        </ul>
    )
}

export default TodoList;