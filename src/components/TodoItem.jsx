import { useDispatch } from 'react-redux';
import { removeTodo, toogleTodo } from '../store/todoSlice';

function TodoItem({item}) {
    const dispath = useDispatch();

    return (
        <li>
            <input
                className="checkbox"
                type="checkbox"
                checked={item.completed}
                onChange={() => dispath(toogleTodo(item))}
            />
            <span>{item.text}</span>
            <button
                className="delete-todo-item"
                type="button"
                onClick={() => dispath(removeTodo(item))}
            >
                delete
            </button>
        </li>
    )
}

export default TodoItem;