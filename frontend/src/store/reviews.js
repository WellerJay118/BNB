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

const addR = (reviews) => ({
    type: ADD_REVIEW,
    review
});

const removeR = (id) => ({
    type: REMOVE_REVIEW,
    id
})


//define thunk creator
export const getReview = () => async(dispatch) => {
    const res = await fetch('/api/')
}

export default reviewsReducer;
