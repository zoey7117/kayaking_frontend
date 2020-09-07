import React from 'react';
import { connect } from 'react-redux';
import Words from '../components/Words';
import { fetchWords } from '../actions/dictionaryAction';
import { Container } from 'semantic-ui-react';

class DictionaryContainer extends React.Component {
	componentDidMount() {
		this.props.fetchWords();
	}

	render() {
		console.log(this.props.words);
		return (
			<Container>
				<Words words={this.props.words} />
			</Container>
		);
	}
}

const mapStateToProps = (state) => {
	return { words: state.words.words };
};

export default connect(mapStateToProps, { fetchWords })(DictionaryContainer);
