import React, {Component} from 'react';
import propTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

export default class Choice extends Component {

	static propTypes = {
		question_id : propTypes.number.isRequired,
		choice_id : propTypes.number.isRequired,
		choice_text : propTypes.string.isRequired,
		onChoiceClick : propTypes.func.isRequired,
		response : propTypes.bool.isRequired
	}

	onChoiceClick = () => {
		this.props.onChoiceClick(this.props.choice_id);
	}

	render = () => {
		return (
			<ListGroup.Item active={this.props.response ? true : false}
				onClick={this.onChoiceClick} name={this.props.question_id}>
				<li>
					{this.props.choice_text}
				</li>
			</ListGroup.Item>
		); 
	}
}