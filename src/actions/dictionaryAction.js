export const fetchWords = () => {
  return dispatch => {
    dispatch({ type: 'LOADING_WORDS'})
    return fetch('https://kayaking-backend.netlify.com/dictionaries')
    .then(resp => resp.json())
    .then(words => {
      dispatch({ type: 'FETCH_WORDS', payload: words})
    })
  }
}
