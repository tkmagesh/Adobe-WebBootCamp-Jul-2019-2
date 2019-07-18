import React, { Component } from 'react';

class Spinner extends Component{
	state = { delta : 0 };	
	render(){
		let { value, up, down } = this.props,
			{ delta } = this.state;
		return(
			<div>
				<input type="number" onChange={ evt => this.setState({delta : parseInt(evt.target.value)})} />
				<br/>
				<input type="button" value="Down" onClick={() => down(delta)}/>
				<span> [ {value} ] </span>
				<input type="button" value="UP" onClick={() => up(delta)}/>
			</div>
		)
	}
} 

export default Spinner;