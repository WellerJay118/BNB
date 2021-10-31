import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import { useEffect } from "react";
import { getSpots } from "../../store/spots";
import { getReview } from "../../store/reviews";
import SpotReview from "../SpotReview";
import ReviewForm from "../ReviewForm";
import BookingForm from "../BookingForm";
// import styles from "./SingleSpot.module.css"


const SingleSpot = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const sessionUser = useSelector(state => state.session.user);

    const spots = useSelector(state => Object.values(state.spots));
    // const spots = useSelector(state => state.spots)

    // const singleSpot = Object.values(spots)?.find((element) => {
    //     return element.id === parseInt(id)
    // })

    // const reviews = useSelector(state => (Object.values(state.reviews)))
    // const spotReviews = reviews.filter(review => Number(review.spotId) === Number(id));


    const singleSpot = spots?.find((element) => {
        return element.id === parseInt(id);
    })

    // const singleSpot = spots.filter(spot => Number(spot.id) === Number(id);


    useEffect(() => {
        dispatch(getSpots());
        dispatch(getReview());
    }, [dispatch]);

    return (
        <div className="single__container">
            <div className="single__wrapper">
                <div className="createSpot__banner">
                    <h1>{singleSpot?.spotName}'s stay</h1>
                    {singleSpot?.userId === sessionUser?.id ? (
                        <button className="single__editbutton" onClick={(e) => history.push(`/spots/${id}/edit`)}>Edit Listing</button>
                    ): null}
                </div>
                <div className="single__info-card">
                    <div className="single__image-container">
                    <img className="single__image" src={singleSpot?.Images[0].url} alt='' />
                    </div>
                            <div className="allSpots__indivSpot--details">
                                <p>{singleSpot?.city}, {singleSpot?.state}</p>
                                <p>Price ${singleSpot?.price} per night</p>
                                <p>Up to {singleSpot?.guestCap} guests</p>
                                <p>Description: {singleSpot?.description}</p>
                            </div>
                    <div className="single__spotReviews">
                    <div className="single__reviewForm">
                        {sessionUser ? <ReviewForm /> : null}
                    </div>
                        <SpotReview spotId={id} />
                    </div>
                </div>
                <div>
                    <BookingForm spotId={id} />
                </div>

            </div>

        </div>

    )


}


export default SingleSpot;
