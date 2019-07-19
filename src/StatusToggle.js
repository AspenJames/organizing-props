import React from 'react';

import { Icon } from 'semantic-ui-react';

/**
 * Parent: TasksContainer
 * Props: {
 * 	done: Boolean,
 * 	toggleTask: function()
 * }
 */

function StatusToggle(props) {
	const name = props.done ? 'circle' : 'circle outline'
	return (
		<Icon name={name} onClick={props.toggleTask}/>
	);
}

export default StatusToggle;