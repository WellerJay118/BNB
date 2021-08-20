import { csrfFetch } from "./csrf";

//Define Action types
const LOAD_REVIEW = 'reviews/'
const ADD_REVIEW = 'reviews/ADD'
const REMOVE_REVIEW = 'reviews/DELETE'

//define action creators
const loadR = (reviews) = ({
    type: LOAD_REVIEW,
    reviews,
});

const addR = (review) => ({
    type: ADD_REVIEW,
    review
});

const removeR = (id) => ({
    type: REMOVE_REVIEW,
    id
})


//define thunk creator
export const getReview = () => async(dispatch) => {
    const res = await fetch('/api/reviews');
    const reviews = await res.json();
    dispatch(loadR(reviews));
}

export const submitReview = (review) => async(dispatch) => {
    const res = await csrfFetch('/api/reviews', {
        method: "POST",
        body: JSON.stringify(review)
    })
    if(res.ok) {
        const newReview = await res.json();
        dispatch(addR(newReview));
        return newReview;
    }
};

export const deleteReview = (id) => async(dispatch) => {
    const res = await csrfFetch(`/api/reviews/${id}`, {
        method: "DELETE",
    })
    if (res.ok) {
        dispatch(removeR(id));
    }
};

//define intial state
const initialState = {};

//define reducer
const reviewsReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_REVIEW: {
            const newState = {...state}
            action.reviews.forEacht(review => {
                newState[review.id] = review
            })
            return newState;
        }
        case ADD_REVIEW: {
            const newState = {...state}
            newState[action.review.id] = action.review
            return newState
        }
        case REMOVE_REVIEW: {
            const newState = {...state}
            delete newState[action.id]
            return newState
        }
        default:
            return state;
    }
}
export default reviewsReducer;
