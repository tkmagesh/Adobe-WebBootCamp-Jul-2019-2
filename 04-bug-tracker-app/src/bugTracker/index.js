import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as bugActionCreators from './actions';

import BugStats from './views/BugStats';
import BugList from './views/BugList';
import BugSort from './views/BugSort';
import BugEdit from './views/BugEdit';



class BugTracker extends Component{
	componentDidMount(){
		this.props.load();
	}
	render(){
		let { bugs, toggle, addNew, removeClosed } = this.props;

		return(
			<section>
				<BugStats bugs={bugs} />
				<BugSort/>
				<BugEdit addNew={addNew} />
				<BugList bugs={bugs} toggle={toggle} removeClosed={removeClosed} />
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



