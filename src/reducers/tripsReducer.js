

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



  


    default:
      return state
  }
}
