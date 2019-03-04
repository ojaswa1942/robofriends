import React from 'react';
import Card from './Card';

const CardList =({robots, removeContact}) =>{
	if(robots.length>0)
	{
	return(
		<div>
			{robots.map((user,i) =>
				<Card key={i} 
				id={robots[i].id} 
				name={robots[i].name} 
				email={robots[i].email} 
				removeContact={removeContact} />)
			}
		</div>
	);
	}
	else {
		return(
			<div style={{color: '#9EEBCF'}} className='f3 ma3'> 
				Oops! Such Empty..
			</div>
			);
	}
}

export default CardList;