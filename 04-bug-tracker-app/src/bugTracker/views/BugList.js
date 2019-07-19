import React, { Component } from 'react';
import BugItem from './BugItem';

class BugList extends Component{
	render(){
		let { bugs, removeClosed, toggle } = this.props,
			bugItems = bugs.map(bug => (<BugItem bug={bug} toggle={toggle} key={bug.id}></BugItem>));
			
		return(
			<section className="list">
				<ol>
					{bugItems}					
				</ol>
				<input type="button" value="Remove Closed" onClick={removeClosed}/>
			</section>
		)
	}
}

export default BugList;