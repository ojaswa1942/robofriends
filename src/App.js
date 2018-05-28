import React from 'react';
import CardList from './CardList';
import {robots} from './robots'; //{} because default isn't used while exporting, destructure for multiple
import SearchBox from './SearchBox';

const App = () => {
	return (
		<div className='tc'>
			<h1>RoboFriends</h1>
			<SearchBox />
			<CardList robots={robots} />
		</div>

	);
}

export default App;