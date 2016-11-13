/**
 * Created by izobs on 13/11/16.
 */
import React, {Component} from 'react';

class SelectorForm extends Component {
	constructor(props) {
		super(props);
		this.state = {value: 'cocount'};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		alert('Your favorite flavort is: ' + this.state.value);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				pick your favorite la croix falvor:
				<select value={this.state.value} onChange={this.handleChange}>
					<option value="grapefruit">Grapefruit</option>
					<option value="lime">Lime</option>
					<option value="coconut">Coconut</option>
					<option value="mango">Mango</option>
				</select>
				<input type="submit" value="Submit" />
			</form>
		);
	}

}

export default SelectorForm;
