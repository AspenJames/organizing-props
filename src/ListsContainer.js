import React from 'react';
import { Button, Divider, Header, List } from 'semantic-ui-react';

/**
 * Parent: App.js
 * Props: {
 * 	tasks: [Object],
 * 	selectList: function(list)
 * }
 */

function ListsContainer({lists, selectList}) {

	function displayLists() {
		return lists.map(function(list) {
			return (
				<List.Item><Button onClick={() => selectList(list)}>
					{list.name}
				</Button></List.Item>
			);
		});
	}

	return (
		<>
			<Header size='huge'>Lists</Header>
			<Divider />
			<List relaxed>
				{displayLists()}
			</List>
		</>
	);
}

export default ListsContainer;
