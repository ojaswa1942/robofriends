import React from 'react';

const Card =({name, email, id}) => {
	//const {name,email,id} = props; //for removing props.
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img  alt='Robot' src ={`https://robohash.org/${id+23}?200x200`} />
			<div>
			<h2>{name}</h2>
			<p>{email}</p>
			</div>
		</div>
		);
}

export default Card;