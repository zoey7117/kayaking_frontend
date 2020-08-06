export const fetchTrips = () => {
	return (dispatch) => {
		dispatch({ type: 'LOADING_TRIPS' });
		return fetch('https://infinite-lowlands-70811.herokuapp.com/trips')
			.then((resp) => resp.json())
			.then((trips) => {
				dispatch({ type: 'FETCH_TRIPS', payload: trips });
			});
	};
};

export const addTrip = (trip) => {
	console.log('addTrip', trip);
	return (dispatch) => {
		return fetch('https://infinite-lowlands-70811.herokuapp.com/trips', {
			method: 'POST',
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json',
				Accept: 'application/json'
			},
			body: JSON.stringify(trip)
		})
			.then((resp) => resp.json())
			.then((trip) => {
				dispatch({ type: 'ADD_TRIP', trip: trip });
			});
	};
};

export const deleteTrip = (id) => {
	console.log('deleteTrip', id);
	return (dispatch) => {
		dispatch({ type: 'DELETE_TRIP', id });
		fetch(`https://infinite-lowlands-70811.herokuapp.com/trips/${id}`, {
			method: 'DELETE'
		});
	};
};
