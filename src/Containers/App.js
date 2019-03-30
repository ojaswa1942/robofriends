import React, {Component} from 'react';
import CardList from '../Components/CardList';
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
			visibleModal: false,
			loading: true
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots:users, loading: false}))
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
	removeContact = (event) =>{
		const id = parseInt(event.currentTarget.attributes.id.value);
		console.log(id);
		this.setState({
			robots: this.state.robots.filter((card) => { 
				if(card.id !== id)
	        		return card; 
	 		})
		});
	}

	render() {
		console.log(this.state.robots);
		const searchedRobots = this.state.robots.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		if(this.state.loading)
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
							<CardList removeContact={this.removeContact} robots={searchedRobots} />
						</ErrorBoundary>
					</Scroll>
				</div>
			);
		}
	}
}

export default App;