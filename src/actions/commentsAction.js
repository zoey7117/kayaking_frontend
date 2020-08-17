export const fetchComments = () => {
	return (dispatch) => {
		dispatch({ type: 'LOADING_COMMENTS' });
		return fetch('https://infinite-lowlands-70811.herokuapp.com/comments')
			.then((resp) => resp.json())
			.then((comments) => dispatch({ type: 'FETCH_COMMENTS', payload: comments }));
	};
};

export const addComment = (comment) => {
	return (dispatch) => {
		return fetch('https://infinite-lowlands-70811.herokuapp.com/comments', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(comment)
		})
			.then((resp) => resp.json())
			.then((comment) => {
				dispatch({ type: 'ADD_COMMENT', comment });
			});
	};
};

export const deleteComment = (id) => {
	return (dispatch) => {
		dispatch({ type: 'DELETE_COMMENT', id });
		return fetch(
			`https://safe-waters-79087.herokuapp.com/https://infinite-lowlands-70811.herokuapp.com/comments/${id}`,
			// `https://infinite-lowlands-70811.herokuapp.com/comments/${id}`,
			{
				method: 'DELETE'
			}
		);
	};
};
