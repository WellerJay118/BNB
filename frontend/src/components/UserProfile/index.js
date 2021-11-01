import { deleteSpot, getSpots } from '../../store/spots';
import { deleteBooking, fetchAllBookings } from '../../store/bookings';
import { getReview } from '../../store/reviews';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router'


function UserProfile() {

    const dispatch = useDispatch();
    const { userId } = useParams();
    const history = useHistory();


    const spots = useSelector(state => Object.values(state.spots))
    const userSpots = spots.filter(spot => Number(spot.userId) === Number(userId))

    const bookings = useSelector(state => Object.values(state.bookings))
    const userBookings = bookings.filter(booking => Number(booking.userId) === Number(userId))

    // const reviews = useSelector(state => (state.reviews))
    // const userReviews = Object.values(reviews).filter(review => Number(review.userId) === Number(userId))


    // console.log(userSpots)
    useEffect(() => {
        dispatch(getSpots());
        dispatch(fetchAllBookings());
        dispatch(getReview());
      }, [dispatch])

      const handleBookingDelete = async(e) => {
          e.preventDefault();
          await dispatch(deleteBooking(e.target.id))
          history.push(`/users/${userId}`)
        }

        const handleListingDelete = async(e) => {
            e.preventDefault();
            await dispatch(deleteSpot(e.target.id))
            history.push(`/users/${userId}`)

      }


    return (
        <div className="profile__wrapper">
            <div className="profile__container">
                <p>My Bookings</p>
                <div className="profile__infoHolder">
                    {userBookings && userBookings.map((booking) =>
                    <div key={booking.id} className="profile__single-info-booking">
                        {/* {console.log(spots[booking.spotId - 1], "!!!!!")} */}
                        <span>{spots[booking.spotId - 1].spotName}'s location, Checkin: {booking.startDate}, Checkout: {booking.endDate}</span>
                        <div className="profile__single-info-booking--buttons">
                            <button onClick={(e) => history.push(`/spots/${booking.spotId}`)}>View</button>
                            <button id={booking.id} onClick={handleBookingDelete}>Delete</button>
                        </div>
                    </div>
                    )}
                </div>

                <p>My Listings</p>
                <div className="profile__infoHolder">
                    {userSpots && userSpots.map((listing) =>
                    <div key={listing.id} className="profile__single-info">
                        {/* {console.log(listing.s)} */}
                        <span>Listing Name: {listing.spotName}</span>
                        <div className="profile__single-info--buttons">
                            <button onClick={(e) => history.push(`/spots/${listing.id}`)}>View Listing</button>
                            <button onClick={(e) => history.push(`/spots/${listing.id}/edit`)}>Edit Listing</button>
                            <button id={listing.id} onClick={handleListingDelete}>Delete this listing</button>
                        </div>
                    </div>
                    )}
                </div>
                {/* <p>My Reviews</p>
                <div className="profile__infoHolder"></div> */}
            </div>
        </div>
    )
}
export default UserProfile
