import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import '../components/GroceryList.css';

import ListItem from '../components/ListItem';

export default function GroceryList(){
	return (
			<div>
				<ul>
		        <ListItem quantity="1">Bread</ListItem>
		        <ListItem quantity="6">Eggs</ListItem>
		        <ListItem quantity="2">Milk</ListItem>
		      </ul>
	      </div>

		);
}