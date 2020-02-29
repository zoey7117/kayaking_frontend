export default (state = {loading: false, words: []}, action) => {

  switch(action.type) {

  case 'LOADING_WORDS':
    return {...state, loading: true}

  case 'FETCH_WORDS':
    return {...state, loading: false, words: action.payload}

  default:
  return state
  }
}
