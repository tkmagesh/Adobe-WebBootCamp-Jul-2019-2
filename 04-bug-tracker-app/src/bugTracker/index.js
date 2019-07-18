import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as bugActionCreators from './actions';

class BugItem extends Component{
	render(){
		let { bug, toggle } = this.props;
		let bugStyle = 'bugname ' + (bug.isClosed ? 'closed' : '');
		return(
			<li>
				<span 
					className={bugStyle}
					onClick={() => toggle(bug)}
				>
					{bug.name}
				</span>
				<div className="datetime">{bug.createdAt.toString()}</div>
			</li>
		);
	}
}

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

class BugEdit extends Component{
	state = { newBugName : '' };
	onAddNewClick = () => {
		this.props.addNew(this.state.newBugName);
	}
	render(){
		return(
			<section className="edit">
				<label htmlFor="">Bug Name :</label>
				<input type="text" onChange={ evt => this.setState({newBugName : evt.target.value}) }/>
				<input type="button" value="Add New" onClick={ this.onAddNewClick }/>
			</section>
		)
	}
}

class BugTracker extends Component{
	
	
	render(){
		let { bugs, toggle, addNew } = this.props,
			bugItems = bugs.map(bug => (<BugItem bug={bug} toggle={toggle} key={bug.id}></BugItem>));

		return(
			<section>
				<BugStats bugs={bugs} />
				<section className="sort">
					<label htmlFor="">Order By :</label>
					<select name="" id="">
						<option value=""></option>
						<option value=""></option>
					</select>
					<label htmlFor="">Descending ? :</label>
					<input type="checkbox" name="" id="" />
				</section>
				<BugEdit addNew={addNew} />
				<section className="list">
					<ol>
						{bugItems}					
					</ol>
					<input type="button" value="Remove Closed" />
				</section>
			</section>
		)
	}
}

function mapStateToProps(storeState){
	let bugs = storeState.bugsState;
	return { bugs : bugs };
}

function mapDispatchToProps(dispatch){
	let bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
	return bugActionDispatchers;
}


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BugTracker);



