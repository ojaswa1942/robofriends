import React from 'react';

const SearchBox = ({searchChange, changeModalView}) => {
	return(
	<div className='pa2'>
		<input 
			className='pa3 ba b--green bg-lightest-blue' 
			type='search' 
			placeholder='Search friends' 
			onChange={searchChange}
		/>	
		<div className='white dib ma2 underline light-green b pointer dim f4' onClick={changeModalView} >
			Add New Contact
		</div>
	</div>
	);
}
export default SearchBox;