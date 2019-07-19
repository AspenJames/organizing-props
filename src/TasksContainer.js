import React from 'react';
import { Divider, Header, List } from 'semantic-ui-react';

import StatusToggle from './StatusToggle';

/**
 * Parent: App.js
 * Props: {
 * 	list: {Object},
 * 	updateList: function(list)
 * }
 */

function TasksContainer({list, updateList}) {

	function renderTasks() {
		return list.tasks.map(function(task) {
			return (
				<List.Item> <StatusToggle done={task.done} toggleTask={() => toggleTask(task)}/>{task.description}</List.Item>
			)
		})
	}

	function toggleTask(clickedTask) {
		const body = {
			tasks: list.tasks.map(function(task) {
				if (task.id !== clickedTask.id) {
					return task
				} else {
					return Object.assign({}, clickedTask, { done: !clickedTask.done })
				}
			})
		};

		fetch(`http://localhost:3001/lists/${list.id}`, {
			method: "PATCH",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify(body)
		}).then(resp => resp.json())
			.then(updateList)
	}

	return (
		<>
			<Header size='huge'>{list.name}</Header>
			<Divider />
			<List divided relaxed>
				{renderTasks()}
			</List>
		</>
	);
}

TasksContainer.defaultProps = {
	list: {
		name: "Select a list!",
		tasks: []
	}
}

export default TasksContainer;