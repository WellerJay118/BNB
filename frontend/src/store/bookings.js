import { csrfFetch } from "./csrf";

const SET_BOOKING = 'bookings/setBookings'
const POST_BOOKING = 'bookings/postBooking'
const UPDATE_BOOKING = 'bookings/updateBooking'
const REMOVE_BOOKING = 'bookings/removeBooking'

const setBookings = (bookings) => ({
    type: SET_BOOKING,
    bookings
})

const addBooking = (booking) => ({
    type: POST_BOOKING,
    booking
})

const updateBooking = (booking) => ({
    type: UPDATE_BOOKING,
    booking
})

const removeBooking = (bookingId) => ({
    type: REMOVE_BOOKING,
    bookingId
})

export const fetchAllBookings = () => async(dispatch) => {
    const res = await fetch('/api/bookings')
    const bookings = await res.json();
    dispatch(setBookings(bookings))
    // return bookings
}

export const createBooking = (booking) => async(dispatch) => {
    const res = await csrfFetch('/api/bookings', {
        method: "POST",
        body: JSON.stringify(booking)
    })
    if(res.ok) {
        const newBooking = await res.json();
        dispatch(addBooking(newBooking))
        return newBooking
    }
}

export const editBooking = (booking) => async(dispatch) => {
    const res = await csrfFetch(`/api/bookings/${booking.id}`, {
        method: "PUT",
        body: JSON.stringify(booking)
    })

    if(res.ok) {
        const editedBooking = await res.json();
        dispatch(updateBooking(editedBooking))
        return editedBooking
    }
}

export const deleteBooking = (bookingId) => async(dispatch) => {
    const res = await csrfFetch(`/api/bookings/${bookingId}`, {
        method: "DELETE"
    })
    if (res.ok) {
        dispatch(removeBooking(bookingId))
    }
}

let initialState = {}

const bookingsReducer = (state = initialState, action) => {
    let newState = {...state};
    switch(action.type) {
        case SET_BOOKING:
            action.bookings.forEach(booking => {
                newState[booking.id] = booking
            })
            return newState;

        case POST_BOOKING: {
            newState[action.booking.id] = action.booking
            return newState
        }
        case UPDATE_BOOKING: {
            newState[action.booking.id] = action.booking
            return newState
        }
        case REMOVE_BOOKING: {
            delete newState[action.bookingId]
            return newState
        }
        default:
            return state;
    }
}

export default bookingsReducer
