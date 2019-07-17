import React, { Component } from 'react';

class Spinner extends Component{
	onBtnDownClick = () => {
		let action = { type : 'DOWN'};
		this.props.store.dispatch(action);
	}

	onBtnUpClick = () => {
		let action = { type : 'UP'};
		this.props.store.dispatch(action);
	}
	render(){
		let { store } = this.props,
			value = store.getState();
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