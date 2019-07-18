import React, { Component } from 'react';

class Spinner extends Component{
	
	state = { delta : 0 };

	onBtnDownClick = () => {
		this.props.actionDispatchers.down(this.state.delta);
	}

	onBtnUpClick = () => {
		this.props.actionDispatchers.up(this.state.delta);
	}
	render(){
		let { value } = this.props;
		return(
			<div>
				<input type="number" onChange={ evt => this.setState({delta : parseInt(evt.target.value)})} />
				<br/>
				<input type="button" value="Down" onClick={this.onBtnDownClick}/>
				<span> [ {value} ] </span>
				<input type="button" value="UP" onClick={this.onBtnUpClick}/>
			</div>
		)
	}
} 

export default Spinner;