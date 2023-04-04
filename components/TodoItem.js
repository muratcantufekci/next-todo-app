function TodoItem({ name, id, isCompleted, checkboxClickHandler, deleteTodoHandler }) {
    return (
        <li className={isCompleted ? "completed" : ''}>
            <div className="view">
                <input className="toggle" type="checkbox" onClick={() => checkboxClickHandler(id)} defaultChecked={isCompleted} />
                <label>{name}</label>
                <button className="destroy" onClick={() => deleteTodoHandler(id)}></button>
            </div>
        </li>
    )
}

export default TodoItem