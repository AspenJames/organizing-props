import React from 'react';
import { Button, Divider, Header, List } from 'semantic-ui-react';

/**
 * Parent: App.js
 * Props: {
 * 	tasks: [Object],
 * 	selectList: function(list)
 * }
 */

function Lists(props) {

	function displayLists() {
		return props.lists.map(function(list) {
			return (
				<List.Item><Button onClick={() => props.selectList(list)}>
					{list.name}
				</Button></List.Item>
			);
		});
	}

	return (
		<div>
			<Header size='huge'>Lists</Header>
			<Divider />
			<List relaxed>
				{displayLists()}
			</List>
		</div>
	);
}

export default Lists;