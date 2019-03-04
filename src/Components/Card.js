import React from 'react';

const Card =({name, email, id, removeContact}) => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<div className='removeElement tr f2'><span onClick={removeContact} id={id} className='pointer dim pa2'>x</span></div>
			<img  alt='Robot' src ={`https://robohash.org/${id+23}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
}

export default Card;