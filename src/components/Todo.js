import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Todo({ task, toggleComplete, deleteTodo, editTodo }) {
	return (
		<div className='todo-row'>
			<p
				className={`${task.completed ? 'completed' : ''}`}
				onClick={() => toggleComplete(task.id)}>
				{task.task}
			</p>
			<div className='icons'>
				<FontAwesomeIcon
					icon={faPenToSquare}
					className='edit-icon'
					onClick={() => editTodo(task.id)}
				/>
				<FontAwesomeIcon
					icon={faTrash}
					className='delete-icon'
					onClick={() => deleteTodo(task.id)}
				/>
			</div>
		</div>
	);
}

export default Todo;
