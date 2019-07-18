import React, { Component } from 'react';

export const spinnerActionCreators = {
	up(){
		let action = { type : 'UP'};
		return action;
	},
	down(){
		let action = { type : 'DOWN'};
		return action;
	}
}


class Spinner extends Component{
	onBtnDownClick = () => {
		let action = this.props.actionCreators.down();
		this.props.dispatch(action);
	}

	onBtnUpClick = () => {
		let action = this.props.actionCreators.up();
		this.props.dispatch(action);
	}
	render(){
		let { value } = this.props;
		return(
			<div>
				<input type="button" value="Down" onClick={this.onBtnDownClick}/>
				<span> [ {value} ] </span>
				<input type="button" value="UP" onClick={this.onBtnUpClick}/>
			</div>
		)
	}
} 

export default Spinner;