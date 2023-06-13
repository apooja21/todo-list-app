import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Todo({ todos }) {
	return (
		<div className='todo-row'>
			<p>Work on todo project</p>
			<div className='icons'>
				<FontAwesomeIcon icon={faPenToSquare} className='edit-icon' />
				<FontAwesomeIcon icon={faTrash} className='delete-icon' />
			</div>
		</div>
	);
}

export default Todo;
