import { useEffect } from 'react';
import {useDispatch, useEffect} from 'react-redux';
import { getReview } from '../../store/reviews';

const SpotReview = ({ spotId }) => {
    const dispatch = useDispatch();
    const reviews = useSelector(state => Object.values(state.reviews));
    const spotReviews = reviews.filter(review => review.spotId === id)

    useEffect(() => {
        dispatch(getReview());
    }, [dispatch])

    return (
        <div> REVIEWS
            {reviews?.map((review) =>
            <div key={review?.id} className="reviewDiv">
                <p>Rating: {review?.rating}</p>
                <p>Review: {review?.review}</p>
                <p>{review?.User?.username}</p>
            </div>
            )}
        </div>
    )

}

export default SpotReview;
