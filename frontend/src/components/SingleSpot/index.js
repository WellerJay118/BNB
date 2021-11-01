import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import { useEffect } from "react";
import { getSpots } from "../../store/spots";
import { getReview } from "../../store/reviews";
import SpotReview from "../SpotReview";
import ReviewForm from "../ReviewForm";
import BookingForm from "../BookingForm";
import MapContainer from "../Maps";
// import styles from "./SingleSpot.module.css"


const SingleSpot = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const sessionUser = useSelector(state => state.session.user);

    const reviews = useSelector(state => Object.values(state.reviews));
    const spotReviews = reviews.filter(review => Number(review.spotId) === Number(id));

    let rating = 0
    spotReviews.forEach(review => rating += review?.rating)
    let spotRAvg = Math.round( (rating/spotReviews.length) / 0.5) * 0.5

    const spots = useSelector(state => Object.values(state.spots));
    // const spots = useSelector(state => state.spots)

    const singleSpot = Object.values(spots)?.find((element) => {
        return element.id === parseInt(id)
    })

    // const reviews = useSelector(state => (Object.values(state.reviews)))
    // const spotReviews = reviews.filter(review => Number(review.spotId) === Number(id));


    // const singleSpot = spots?.find((element) => {
    //     return element.id === parseInt(id);
    // })

    // const singleSpot = spots.filter(spot => Number(spot.id) === Number(id);


    useEffect(() => {
        dispatch(getSpots());
        dispatch(getReview());
    }, [dispatch]);

    return (
        <div className="single__container">
            <div className="single__wrapper">
                <div className="indivSpot__banner">
                    <h1>{singleSpot?.spotName}'s stay</h1>
                    {singleSpot?.userId === sessionUser?.id ? (
                        <button className="single__editbutton" onClick={(e) => history.push(`/spots/${id}/edit`)}>Edit Listing</button>
                    ): null}
                </div>

                <div className="single__info-card">


                    <div className="single__image-container">
                        <img className="single__image" src={singleSpot?.Images[0].url} alt='' />
                    </div>


                    <div className="single__info-wrapper">
                        <div className="single__info-container">
                            <div className="indivSpot__details">
                                <p>{singleSpot?.city}, {singleSpot?.state}</p>
                                <p>Price ${singleSpot?.price} per night</p>
                                <p>Up to {singleSpot?.guestCap} guests</p>
                                <p>Rating: {spotRAvg} out of 5</p>
                                <p>Description: {singleSpot?.description}</p>
                            </div>
                            <div className="single__booking">
                                <BookingForm spotId={id} />
                            </div>
                    </div>
                    <div className="single__spotReviews">
                        <SpotReview spotId={id} />
                        <div className="single__reviewForm">
                            {sessionUser ? <ReviewForm /> : null}
                        </div>
                    </div>



                </div>

                    <div className="maptest">
                        <MapContainer spots={singleSpot} />
                    </div>
                </div>

            </div>

        </div>

    )


}


export default SingleSpot;
