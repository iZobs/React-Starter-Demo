/**
 * Created by izobs on 13/11/16.
 */

import React, {Component} from 'react';

//using props ways
/*
class Clock extends Component {
	render() {
		return(
			<div>
				<h1>
					Hello wrold!!!
				</h1>
				<h2>
					It is {this.props.date.toLocaleTimeString()}
				</h2>
			</div>
		);
	}
}
*/


//using state ways

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {date:new Date()};
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(),1000);
	}

	tick() {
		this.setState({date:new Date()});
	}

	componentWillUnmount() {
		clearInterval();
	}


	render() {
		return(
			<div>
				<h1>
					Hello world!!!!
				</h1>
				<h2>
					It is {this.state.date.toLocaleTimeString()}
				</h2>
			</div>
		);

	}
}

export default Clock;
