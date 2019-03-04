import React, {Component} from 'react';
import CardList from '../Components/CardList';
//Now use API
// import {robots} from './robots'; //{} because default isn't used while exporting, destructure for multiple
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import AddContact from '../Components/AddContact';

class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield: '',
			visibleModal: false
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

	onAddContact = () =>{
		this.setState({visibleModal: true});
	}
	invisibleModal = () => {
		this.setState({visibleModal: false});
	}
	onSuccessfulAddition = (name, email) => {
		const newElement = {
			id: this.state.robots.length+100,
			name: name,
			email: email	
		};
		this.setState({
		  robots: [newElement, ...this.state.robots]
		});
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
					<SearchBox searchChange={this.onSearchChange} changeModalView={this.onAddContact} />
					<AddContact 
						visibleModal={this.state.visibleModal} 
						invisibleModal={this.invisibleModal} 
						onSuccessfulAddition={this.onSuccessfulAddition} />
					<Scroll>
						<ErrorBoundary>
							<CardList robots={searchedRobots} />
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		}
	}
}

export default App;