import React, {Component} from 'react';
import QuestionList from './quiz/QuestionList.jsx';
import test from '../Questions';

import '../../app/css/style.css';

export default class App extends Component {
	render() {
		return (
			<QuestionList {...test}/>
			)
	}
}