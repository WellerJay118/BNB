import { csrfFetch } from "./csrf";

//Define Action types as constants
const LOAD = 'spots/';
// const LOAD_IMG = 'spots/LOAD_IMG';
// const ADD = 'spots/ADD';
// const EDIT = 'spots/EDIT';
// const REMOVE = 'spots/DELETE';

//define action creators
const load = (spots) => ({
    type: LOAD,
    spots,
});

// const add = (spot) => ({
//     type: ADD,
//     spot,
// });

// const edit = (spot) => ({
//     type: EDIT,
//     spot,
// });

// const remove = (spot) => ({
//     type: REMOVE,
//     spot,
// });

//define thunk creator
export const getSpots = () => async(dispatch) => {
    const res = await fetch('/api/spots');
    const spots = await res.json();
    dispatch(load(spots));
};

// export const addSpot = (payload) => async(dispatch) => {
//     const res = await.csrfFetch("/api/spots", {
//         method: "POST",
//         body: JSON.stringify(payload),
//     });
//     if(res.ok) {
//         const spot = await res.json();
//         dispatch(add(spot));
//         return spot;
//     }
// }


//define initial state
const initialState = {}

//define reducer
const spotsReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type) {
        case LOAD:
            newState.allSpots = [...action.spots]
            return newState;
        // case ADD:
        //     newState.spots.push() //maybe use splice?
        //     return newState
        // case EDIT:
            //
        // case REMOVE:
            //
        default:
            return state;
    }
}



//export reducer
export default spotsReducer;
