import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export const calculatorActionCreators = {
	add(x,y){
		return { type : 'add', payload : {x,y} }
	},
	subtract(x,y){
		return { type : 'subtract', payload : {x,y} }
	},
	multiply(x,y){
		return { type : 'multiply', payload : {x,y} }
	},
	divide(x,y){
		return { type : 'divide', payload : {x,y} }
	}
}

export function calculatorReducer(currentState = 0, action){
	console.log(arguments);
	let { x, y } = action.payload || { x : 0, y : 0};
	switch(action.type){
		case 'add' :
			return x + y;
			break;
		case 'subtract' :
			return x - y;
			break;
		case 'multiply' :
			return x * y;
			break;
		case 'divide' :
			return x / y;
			break;
	}
	return currentState;
}

class Calculator extends Component{
	state = { x : 0, y : 0}
	render(){
		let { result, add, subtract, multiply, divide } = this.props;
		let { x, y} = this.state;
		return (
			<div>
				<h1>Calculator</h1>
				<hr/>
				<input type="number" onChange={ evt => this.setState({x : parseInt(evt.target.value) } ) } />
				<input type="number" onChange={ evt => this.setState({y : parseInt(evt.target.value) } ) } />
				<br/>
				<input type="button" value="Add" onClick={() => add(x,y)} />
				<input type="button" value="Subtract" onClick={() => subtract(x,y)} />
				<input type="button" value="Multiply" onClick={() => multiply(x,y)} />
				<input type="button" value="Divide" onClick={() => divide(x,y)} />
				<div>{result}</div>
			</div>
		)
	}
}

function mapStateToProps(storeState){
	let calculatorValue = storeState.calculatorState;
	return { result : calculatorValue };
}

function mapDispatchToProps(dispatch){
	let calculatorActionDispatchers = bindActionCreators(calculatorActionCreators, dispatch);
	return calculatorActionDispatchers;
}


export default connect(
		mapStateToProps,
		mapDispatchToProps
	)(Calculator);