export const fetchComments = () => {
  // console.log('fetchcomments')
  return dispatch => {
    dispatch({ type: 'LOADING_COMMENTS'})
    return fetch('https://infinite-lowlands-70811.herokuapp.com/comments')

    .then(resp => resp.json())
    .then(comments => dispatch({ type: 'FETCH_COMMENTS', payload: comments }));
  }
}


export const addComment = comment => {
  // console.log('addComment', comment)
  return dispatch => {

    return fetch('https://safe-waters-79087.herokuapp.com/https://kayaking-backend.netlify.com/comments', {
      method: 'POST',
      headers: {
        // 'Access-Control-Allow-Origin': '*',
        // // 'Access-Control-Allow-Origin': 'https://kayaking-frontend.herokuapp.com',

        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(comment),
    })
    .then(resp => resp.json())
    // .then(console.log)
    .then(comment => {
      // console.log(comment)

      dispatch({ type: 'ADD_COMMENT', comment})
    });
  }

}


export const deleteComment = id => {
  // console.log('deleteComment', id)
  return dispatch => {
    dispatch({ type: 'DELETE_COMMENT', id})
    return fetch(`https://safe-waters-79087.herokuapp.com/https://kayaking-backend.netlify.com/comments/${id}`,{
      method: 'DELETE'
    })
  }
}
//
// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = 'https://kayaks-backend-api.herokuapp.com/comments'
