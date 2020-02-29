export const fetchWords = () => {
  return dispatch => {
    dispatch({ type: 'LOADING_WORDS'})
    return fetch('https://infinite-lowlands-70811.herokuapp.com/dictionaries')
    .then(resp => resp.json())
    .then(words => {
      dispatch({ type: 'FETCH_WORDS', payload: words})
    })
  }
}
