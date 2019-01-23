import React from 'react';

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
	state = {
		nome: 'ivelton',
		todos: [
			{
				id: 1,
				title: 'Context',
				completed: false
			},
			{
				id: 2,
				title: 'Http',
				completed: false
			},
			{
				id: 3,
				title: 'Charts',
				completed: false
			},
			{
				id: 4,
				title: 'ToDo',
				completed: false
			}
		]
	};

	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};

	hi = (id) => { console.log("hi", id) };


	render() {
		return (
			<AppContext.Provider
				value={{
					...this.state,
					markComplete: this.markComplete,
					hi: this.hi
				}} >
				{this.props.children};
      </ AppContext.Provider>
		);
	}
}

