import React, { Component } from 'react';

class BugStats extends Component{
	render(){
		let { bugs }= this.props;
		return(
			<section className="stats">
				<span className="closed">1</span>
				<span> / </span>
				<span>{bugs.length}</span>
			</section>
		)
	}
}

export default BugStats;