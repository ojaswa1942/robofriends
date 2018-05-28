import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(
	<div>
		<Card />
		<Card />
		<Card />
	</div>,
	document.getElementById('root'));
registerServiceWorker();
