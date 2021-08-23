import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import { useEffect } from "react";
import { getSpots } from "../../store/spots";
import { getReview } from "../../store/reviews";
import SpotReview from "../SpotReview";
import ReviewForm from "../ReviewForm";
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
 <>
            <h1>SINGLE SPOT COMPONENT</h1>
            <div>
                {/* <img src={singleSpot?.Images[0].url} alt='' /> IMAGES[0] IS UNDEFINED IF THERE IS NO IMAGE, THIS CAUSES ISSUES */}
                <p>{singleSpot?.spotName}'s stay</p>

                {singleSpot?.userId === sessionUser?.id ? (
                    <button onClick={(e) => history.push(`/spots/${id}/edit`)}>Edit</button>
                ): null}

            </div>

            <div>
                {/* {console.log('reviews', reviews)}
                {console.log('spotid', id)}
                {console.log('spotReviews', spotReviews)} */}
                {/* {console.log('review', review)} */}
            {/* {reviews?.map((review) =>
            <SpotReview key={review.id} spotId={id} review={review} />
        )} */}
            </div>
            <div>
            {sessionUser ? <ReviewForm /> : null}
            <SpotReview spotId={id} />
            {/* for Spot Review above if i pass in review={review}  */}
            </div>
            {/* Should be able to just render in the component of a review form or a booking form here, similar to App */}
</>

    )


}


export default SingleSpot;
