// synchronous action
// export const setMyTrips = trips => {
//   return {
//     type: "SET_MY_TRIPS",
//     trips
//   }
// }
//
// export const clearMyTrips = () => {
//   return {
//     type: "CLEAR_MY_TRIPS",
//   }
// }

// async actions
export const fetchTrips = () => {
  return dispatch => {
    dispatch({ type: 'LOADING_TRIPS'})
    return fetch('https://safe-waters-79087.herokuapp.com/https://kayaks-backend-api.herokuapp.com/trips')

    .then(resp => resp.json())
    // .then(console.log)
    .then(trips => {
      dispatch({ type: 'FETCH_TRIPS', payload: trips })});
  }
}



export const addTrip = trip => {
  console.log('addTrip', trip)
  return dispatch => {
    return fetch('https://kayaks-backend-api.herokuapp.com/trips',{
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Origin': 'https://kayaking-frontend.herokuapp.com',

        'Content-Type': 'application/json',
        'Accept': 'application/json'      },
      body: JSON.stringify(trip),
    })
    .then(resp => resp.json())
    .then(trip => {
      // (console.log('add trip',trip))
      dispatch({type:'ADD_TRIP', trip:trip})
    })
  }
}

export const deleteTrip = id => {
  console.log('deleteTrip', id)
  return dispatch => {
    dispatch({ type: 'DELETE_TRIP', id})
    fetch(`https://safe-waters-79087.herokuapp.com/https://kayaks-backend-api.herokuapp.com/trips/${id}`,{
      method: 'DELETE'
    })
  }
}




// export const getMyTrips = id => {
//     return dispatch => {
//         dispatch({ type: 'GET_MY_TRIPS'})
//         return fetch(`https://safe-waters-79087.herokuapp.com/https://kayaks-backend-api.herokuapp.com/trips/${id}`,{
//             method: 'GET',
//           })
//           .then(resp => resp.json())
//           .then(resp => {
//               dispatch(getMyTrips())
//             })
//           }
//         }
