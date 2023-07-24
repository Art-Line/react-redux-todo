import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../store/todoSlice';

function AddTodo() {

    const [text, setText] = useState('');
	const dispath = useDispatch();

	const addTask = () => {
		dispath(addTodo(text));
		setText('');
	}


    return (
        <label className="add-todo">
            <input className="add-todo__input" value={text} onChange={(e) => setText(e.target.value)} />
            <button className="add-todo__btn" onClick={() => addTask()}>add todo</button>
        </label>
    )

}

export default AddTodo;