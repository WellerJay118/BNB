import { csrfFetch } from "./csrf";

//Define Action types
const LOAD_REVIEW = 'reviews/loadR'
const ADD_REVIEW = 'reviews/addR'
const REMOVE_REVIEW = 'reviews/removeR'

//define action creators
const loadR = (reviews) => ({
    type: LOAD_REVIEW,
    reviews,
});

const addR = (review) => ({
    type: ADD_REVIEW,
    review
});

const removeR = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
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

export const deleteReview = (reviewId) => async(dispatch) => {
    console.log(reviewId)
    const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: "DELETE",
    })
    if (res.ok) {
        const { deleted } = await res.json();
        if(deleted) {

            dispatch(removeR(reviewId));
        }
    }
};

//define intial state
const initialState = {};

//define reducer
const reviewsReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_REVIEW: {
            const newState = {...state}
            action.reviews.forEach(review => {
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
            delete newState[action.reviewId]
            return newState
        }
        default:
            return state;
    }
}
export default reviewsReducer;
