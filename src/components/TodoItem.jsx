function TodoItem({item, removeTodo,  toogleTodo}) {
    return (
        <li key={item.id}>
            <input
                className="checkbox"
                type="checkbox"
                checked={item.completed}
                onChange={() => toogleTodo(item.id)}
            />
            <span>{item.text}</span>
            <button
                className="delete-todo-item"
                type="button"
                onClick={() => removeTodo(item.id)}
            >
                delete
            </button>
        </li>
    )
}

export default TodoItem;