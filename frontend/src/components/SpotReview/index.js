import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getReview } from '../../store/reviews';

const SpotReview = ({ spotId }) => {
    const dispatch = useDispatch();
    const reviews = useSelector(state => Object.values(state.reviews));
    const spotReviews = reviews.filter(review => Number(review.spotId) === Number(spotId));

    useEffect(() => {
        dispatch(getReview());
    }, [dispatch])

    return (
        <div className="test"> REVIEWS COMPONENT
            {spotReviews?.map((review) =>
            <div key={review?.id} className="reviewDiv">
                <p>{review?.User?.username}</p>
                <p>Rating: {review?.rating}</p>
                <p>Review: {review?.review}</p>
            </div>
            )}
        </div>
    )

}

export default SpotReview;
