import React, {Component} from 'react';
import Modal from 'react-awesome-modal';

class AddContact extends Component{
	constructor(props){
		super(props);
		this.state = {
			hasError: false,
			nameField: '',
			emailField: '',
		}
	}

	onNameChange = (event) => {
		this.setState({nameField:event.target.value});
	}
	onEmailChange = (event) => {
		this.setState({emailField:event.target.value});
	}
	_handleKeyPress = (event) => {
	    if(event.key === 'Enter'){
	      this.addContact();
	    }
  	}
  	addContact = () => {
  		if(!this.state.nameField || !this.state.emailField){
  			(document.getElementsByClassName('errorHere2'))[0].style.display = 'none';
  			(document.getElementsByClassName('errorHere'))[0].style.display = 'unset';
  		}
  		else if(!this.state.emailField.match(/^(?=[A-Za-z0-9][A-Za-z0-9@._%+-]{5,253}$)[A-Za-z0-9._%+-]{1,64}@(?:(?=[A-Za-z0-9-]{1,63}\.)[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*\.){1,8}[A-Za-z]{2,5}$/)){
  			(document.getElementsByClassName('errorHere'))[0].style.display = 'none';
  			(document.getElementsByClassName('errorHere2'))[0].style.display = 'unset';
  		}
  		else{
  			this.props.onSuccessfulAddition(this.state.nameField, this.state.emailField);
  			(document.getElementsByClassName('errorHere'))[0].style.display = 'none';
  			(document.getElementsByClassName('errorHere2'))[0].style.display = 'none';
  			(document.getElementById('nameInput')).value='';
  			(document.getElementById('emailInput')).value='';
	    	this.props.invisibleModal();
  		}
  	}

	render(){
		return(
			<Modal 
	            visible={this.props.visibleModal}
	            effect="fadeInDown"
	            onClickAway={this.props.invisibleModal}
	        >
	            <div className='navy b f5 flex flex-column items-center pa4 bg-light-green br3 modalAdd'>
	            	<div className='f2 b'>
	                	Add New Contact
	                </div>
	                <div>
	                	Name: 
						<input
							id='nameInput' 
							className='ma2 pa3 ba b--green bg-lightest-blue' 
							type='search' required
							placeholder='Enter Name'
							onChange={this.onNameChange}
							onKeyPress={this._handleKeyPress}
						/>
					</div>
					<div>
						Email:
				 		<input 
							id='emailInput' 
							className='pa3 ma2 ba b--green bg-lightest-blue' 
							type='search' required
							placeholder='Enter Email'
							onChange={this.onEmailChange}
							onKeyPress={this._handleKeyPress}
						/>	
					</div>
					<div className='errorHere red fw1'>All fields required</div>
					<div className='errorHere2 red fw1'>Invalid Email</div>
					<div onClick={this.addContact} className="f5 ma2 fw5 link dim br3 ph3 pv2 mb1 light-green bg-navy pointer">Add</div>
	            </div>
	        </Modal>
        );
	}
}

export default AddContact;