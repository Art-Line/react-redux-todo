function AddTodo({text, setText, addTodo}) {
    return (
        <label className="add-todo">
            <input className="add-todo__input" value={text} onChange={(e) => setText(e.target.value)} />
            <button className="add-todo__btn" onClick={() => addTodo()}>add todo</button>
        </label>
    )

}

export default AddTodo;