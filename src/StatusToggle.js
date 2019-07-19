import React from 'react';

import { Icon } from 'semantic-ui-react';

/**
 * Parent: TasksContainer
 * Props: {
 * 	done: Boolean,
 * 	toggleTask: function()
 * }
 */

function StatusToggle({done, toggleTask}) {
	const name = done ? 'circle' : 'circle outline'
	return (
		<Icon name={name} onClick={toggleTask}/>
	);
}

export default StatusToggle;