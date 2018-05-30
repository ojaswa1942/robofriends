import React, {Component} from 'react';
import CardList from './CardList';
//Now use API
// import {robots} from './robots'; //{} because default isn't used while exporting, destructure for multiple
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';

class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots:users}))
	}


	onSearchChange = (event) => {
		this.setState({searchfield:event.target.value})
		// console.log(searchedRobots);
	}


	render() {
		const searchedRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if(!this.state.robots.length)
			return (<h1 className="tc f2">Loading</h1>);
		else{
			return(
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots={searchedRobots} />
						</ErrorBoundary>
					</Scroll>
				</div>
				);}
	}
}

export default App;