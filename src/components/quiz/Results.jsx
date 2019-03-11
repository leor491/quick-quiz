import React, {Component} from 'react';
import propTypes from 'prop-types';


export default class Results extends Component {
	static propTypes = {
		answers : propTypes.arrayOf(propTypes.number).isRequired,
		responses : propTypes.arrayOf(propTypes.number).isRequired
	}

	render = () => {
		let {responses} = this.props;
		let total = this.props.responses.length;
		let correct = 0;

		this.props.answers.map((answer, index) => {
			if (responses[index] === answer)
				++correct;
		});

		return (
			<div className='well'>
				<h4>You correctly answered <u>{correct}</u> out of <u>{total}</u> questions.</h4>
				<h1>You scored {correct/total * 100}%.</h1>
			</div>
			);
	}
}