import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';


function App() {
	const [todos, setTodos] = useState([]);
	const [text, setText] = useState('');

	const addTodo = (e) => {
		if (text.trim().length > 0) {
			setTodos([
				...todos,
				{
					id: new Date().toISOString(),
					text: text,
					completed: false
				}
			])
			setText('');
		}
	}

	const removeTodo = (idTodo) => {
		setTodos(todos.filter(item => item.id !== idTodo))
	}

	const toogleTodo = (idTodo) => {
		setTodos(todos.map(
			todo => {
				if (todo.id !== idTodo) return todo;
				return {
					...todo,
					completed: !todo.completed
				}
			}
		))
	}

	return (
		<div className="App">
			<AddTodo
				text={text}
				setText={setText}
				addTodo={addTodo}
			/>
			<TodoList
				todos={todos}
				removeTodo={removeTodo}
				toogleTodo={toogleTodo}
			/>

		</div>
	);
}

export default App;
