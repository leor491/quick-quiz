import React, {Component} from 'react';
import propTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';
import ListGroup from 'react-bootstrap/ListGroup';

import Choice from './Choice.jsx'

export default class Question extends Component {

	static propTypes = {
		text : propTypes.string.isRequired,
		choices : propTypes.arrayOf(propTypes.string).isRequired,
		question_id : propTypes.number.isRequired,
		response : propTypes.number,
		onSubmitAnswer : propTypes.func.isRequired
	}

	static defaultProps = {
		response : -1
	}

	constructor(props) {
		super(props);
		this.state = {
			response : this.props.response
		}
	}

	onChoiceClick = (response) => {
		this.setState({response});
	}

	onSubmitAnswer = (forward) => {
		let {question_id} = this.props;
		if(forward || question_id > 0)
			this.props.onSubmitAnswer(forward, this.state.response);
	}

	render = () => {
		return (
			<div className='well'>
				<h3>{this.props.text}</h3>
				<hr/>
				<ListGroup>
					<ol className='choices'>
						{
							this.props.choices.map((choice, choice_id)=>{
								return (
										<Choice
										key={choice_id} 
										choice_id={choice_id} 
										question_id={this.props.question_id}
										onChoiceClick={this.onChoiceClick}
										choice_text={choice} 
										response={this.state.response === choice_id ? true : false}/>
									); 
							})
						}
					</ol>
				</ListGroup>

				<Nav variant='pills' as='nav'>
					<ul className='pager'>
						<Nav.Item as='li' className={this.props.question_id === 0 ? 'disabled' : ''} onClick={() => this.onSubmitAnswer(false)}>
							<Nav.Link as='a'>
								<span aria-hidden='true'>&laquo;</span> Previous
							</Nav.Link>
						</Nav.Item>

						<Nav.Item as='li' className={this.state.response > -1 ? '' : 'disabled'} onClick={() => this.onSubmitAnswer(true)}>
							<Nav.Link as='a'>
								Next <span aria-hidden='true'>&raquo;</span>
							</Nav.Link>
						</Nav.Item>
					</ul>
				</Nav>
			</div>
			);
	}
}