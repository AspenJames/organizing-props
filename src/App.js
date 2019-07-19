import React from 'react';
import './App.css';

import { Grid } from 'semantic-ui-react';

import Lists from './Lists';
import TasksContainer from './TasksContainer';

class App extends React.Component {

	state = {
		lists: []
	}

	componentDidMount() {
		fetch('http://localhost:3001/lists')
			.then(resp => resp.json())
			.then(json => {
				this.setState({ lists: json })
			})
	}

	selectList = (list) => {
		this.setState({ selectedList: list })
	}

	updateList = (newList) => {
		this.setState((state, _props) => {
			return {
				lists: state.lists.map(list => {
					if (list.id === newList.id) {
						return newList
					} else {
						return list
					}
				}),
				selectedList: newList
			}
		})
	}

	render() {
		return (
			<Grid className='container'>
				<Grid.Column width={4} id='list-grid'>
					<Lists lists={this.state.lists} 
								 selectList={this.selectList} />
				</Grid.Column>

				<Grid.Column width={12} id='task-grid'>
					<TasksContainer list={this.state.selectedList} updateList={this.updateList}/>
				</Grid.Column>
			</Grid>
		);
	}
}

export default App;
