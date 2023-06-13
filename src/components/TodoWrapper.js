import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
uuidv4();

function TodoWrapper() {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		const newTodos = [
			{ id: uuidv4(), task: todo, completed: false, isEdited: false },
			...todos,
		];
		setTodos(newTodos);

		console.log(newTodos);
	};

	return (
		<div className='todo-wrapper'>
			<h1>What's the Plan for Today?</h1>
			<TodoForm addTodo={addTodo} />
			{/* {todos.map((todo, index) => {
				<Todo task={todo} key={index} />;
			})} */}
			<Todo />
		</div>
	);
}

export default TodoWrapper;
