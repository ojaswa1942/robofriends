import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots'; //{} because default isn't used while exporting, destructure for multiple
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield:event.target.value})
		// console.log(searchedRobots);
	}


	render() {
		const searchedRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots={searchedRobots} />
			</div>
			);
	}
}

export default App;