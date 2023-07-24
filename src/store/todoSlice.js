import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		todos: []
	},
	reducers: {
		addTodo(state, action) {
			state.todos.push({
				id: new Date().toISOString(),
				text: action.payload,
				completed: false
			});
		},
		removeTodo(state, action) {
			state.todos = state.todos.filter(item => item.id !== action.payload.id);
		},
		toogleTodo(state, action) {
			const toogleTodo = state.todos.find(item => item.id === action.payload.id);
			toogleTodo.completed = !toogleTodo.completed;
		}
	},
})

export const { addTodo, removeTodo, toogleTodo } = todoSlice.actions

export default todoSlice.reducer