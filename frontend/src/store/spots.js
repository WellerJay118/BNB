import { csrfFetch } from "./csrf";

//Define Action types as constants
const LOAD = 'spots/';
const ADD = 'spots/ADD';
const EDIT = 'spots/EDIT';
// const REMOVE = 'spots/DELETE';

//define action creators
const load = (spots) => ({
    type: LOAD,
    spots,
});

const add = (spot) => ({
    type: ADD,
    spot,
});

const edit = (spot) => ({
    type: EDIT,
    spot,
});

// const remove = (spot) => ({
//     type: REMOVE,
//     spot,
// });

//define thunk creator
export const getSpots = () => async(dispatch) => {
    const res = await fetch('/api/spots');
    const allSpots = await res.json();
    dispatch(load(allSpots));
};

export const createSpot = (payload) => async(dispatch) => {
    const res = await csrfFetch("/api/spots", {
        method: "POST",
        body: JSON.stringify(payload),
    });
    if(res.ok) {
        const spot = await res.json();
        dispatch(add(spot));
        return spot;
    }
}

export const editSpot = (id, payload) => async(dispatch) => {
    const res = await csrfFetch(`/api/spots/${id}`, {
        method: "PATCH",
        body: JSON.stringify(payload)
    });
    if(res.ok) {
        const spot = await res.json();
        dispatch(edit(spot));
        return spot;
    }
}

//define initial state
const initialState = {}

//define reducer
const spotsReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type) {
        case LOAD:
            {action.spots.forEach(spot => {
                newState[spot.id] = spot;
              });}
            return newState;
        case ADD:
            newState[action.spot.id] = action.spot
            return newState
        case EDIT:
            newState[action.spot] = action.spot;
            return newState
        // case REMOVE:
            //
        default:
            return state;
    }
}



//export reducer
export default spotsReducer;
