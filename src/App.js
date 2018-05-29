import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots'; //{} because default isn't used while exporting, destructure for multiple
import SearchBox from './SearchBox';

class App extends Component {

	
	render() {
		return(
			<div className='tc'>
				<h1>RoboFriends</h1>
				<SearchBox />
				<CardList robots={robots} />
			</div>
			);
	}
}

export default App;