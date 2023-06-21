import TodoItem from "./TodoItem";

function TodoList({todos, removeTodo, toogleTodo}) {
    return (
        <ul className="todo">
            {todos.map(item => (
                <TodoItem item={item} removeTodo={removeTodo} toogleTodo={toogleTodo} />
            ))}
        </ul>
    )
}

export default TodoList;