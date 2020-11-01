import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import '../components/ListItem.css';

export default function ListItem(props) {

	return (
		<div>
		<li>
        	{props.quantity}× {props.children}
      	</li>
      	</div>
		);
}