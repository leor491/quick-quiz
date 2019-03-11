import React, {Component} from 'react';
import propTypes from 'prop-types';
import ProgressBar from 'react-bootstrap/ProgressBar'

import Question from './Question.jsx';
import Results from './Results.jsx';

export default class QuestionList extends Component {

	static propTypes = {
		questions : propTypes.array.isRequired,
		answers : propTypes.arrayOf(propTypes.number).isRequired,
	}

	constructor(props) {
		super(props);

		this.state = {
			current : 0,
			responses : [],
		}
	}

	handleSubmitAnswer = (forward, newResponse) => {

		this.setState({
			current : this.state.current + (forward ? 1 : -1),
			responses : (this.state.current === this.state.responses.length ? 
				[...this.state.responses, newResponse] : 
				this.state.responses.map((response, index) => {
					return index === this.state.current ? newResponse : response;
				}))
		});
	}

	render = () => {
		let {current} = this.state;
		let questions = this.props.questions; 
		let question = questions[current];
		let answers = this.props.answers;
		let response = this.state.responses[current];
		let length = this.props.questions.length;
		let now = current/length * 100;

		return (current === length ?
				<div>
					<Results responses={this.state.responses} answers={answers}/>
				</div> : 
				<div>
					<ProgressBar now={now} label={`${now}%`} />
					<br />
					<Question
						{...question}
						question_id={current}
						key={current}
						onSubmitAnswer={this.handleSubmitAnswer}
						response={response}/>
				</div>
			);
		};
	}