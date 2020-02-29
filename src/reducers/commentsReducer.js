export default (state = {loading: false, comments: []}, action) => {

  switch(action.type) {

    case 'LOADING_COMMENTS':
      return {...state, loading: true}

    case "FETCH_COMMENTS":
      return {...state, loading: false, comments: action.payload}

    case "ADD_COMMENT":
      const comment = action.comment
      // console.log('commentreducer',comment)
      return {...state, comments: [...state.comments, comment], loading: false}

    case "DELETE_COMMENT":
      const comments = state.comments.filter(comment => comment.id !== action.id)
      return {...state, comments}

    default:
      return state
  }
}
