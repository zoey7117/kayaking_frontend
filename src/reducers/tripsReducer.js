

export default (state = {loading: false, trips: []}, action) => {

  switch(action.type) {

    case 'LOADING_TRIPS':
      return {...state, loading: true}

    case "FETCH_TRIPS":
      return {...state, loading: false, trips: action.payload}

    case "ADD_TRIP":
      console.log('add trip reducer')
      return {...state, trips: [...state.trips, action.trip], loading: false}

    case "DELETE_TRIP":
       let trips = state.trips.filter(trip => trip.id !== action.id)
      return {...state, trips}

    

    // case "TRIP_LIKE":
    // // console.log('add_like reducer')
    //   // const trip = action.trip
    //   // console.log('add_like reducer', trip)
    //   return {...state, trips: [...state.trips, action.trip]}
    //


    // case "ADD_COMMENT":
    // console.log('tripRed')
    //   const newComment = action.comment
    //   const tripArr = state.trips.map(trip => {
    //     if (trip.id === newComment.trip.trip_id) {
    //       trip.comments.push(newComment)
    //     }
    //     return trip
    //   })
    //   return {...state, trips: [...tripArr]}


    default:
      return state
  }
}
