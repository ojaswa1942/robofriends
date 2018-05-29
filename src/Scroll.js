import React from 'react';

const Scroll = (props) =>{
	return(
		<div style={{overflow:'scroll', 
					borderTop:'.25px solid #9EEBCF',
					height:'800px'} }>
			{props.children}
		</div>

		);
}

export default Scroll;