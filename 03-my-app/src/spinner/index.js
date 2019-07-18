import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import spinnerActionCreators from './actions';

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


//state extraction
function mapStateToProps(storeState){
	let spinnerValue = storeState.spinnerState;
	return { value : spinnerValue };
}

//action dispatchers creation
function mapDispatchToProps(dispatch){
	let spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, dispatch);
	return spinnerActionDispatchers;
}

export default connect(
		mapStateToProps,
		mapDispatchToProps
	)(Spinner);



