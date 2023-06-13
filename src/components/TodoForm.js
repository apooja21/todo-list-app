import React, { useState } from 'react';

function TodoForm({ addTodo }) {
	const [input, setInput] = useState('');

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(input);
		setInput('');
	};

	return (
		<form className='todo-form' onSubmit={handleSubmit}>
			<input
				type='text'
				value={input}
				className='todo-input'
				placeholder='Add a task'
				onChange={handleChange}
			/>
			<button type='submit' className='todo-btn'>
				Add Task
			</button>
		</form>
	);
}

export default TodoForm;
