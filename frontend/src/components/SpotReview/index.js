import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteReview, getReview } from '../../store/reviews';

const SpotReview = ({ spotId, reviewId }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const reviews = useSelector(state => Object.values(state.reviews));
    const spotReviews = reviews.filter(review => Number(review.spotId) === Number(spotId));
    const sessionUser = useSelector(state => state.session.user);


    useEffect(() => {
        dispatch(getReview());
    }, [dispatch])

    const handleDelete = async(e) => {
        e.preventDefault();
        console.log('reviewID', reviewId, 'spotId', spotId)
        await dispatch(deleteReview(reviewId))
        history.push(`/spots/${spotId}`)
    }

    return (
        <div className="test"> REVIEWS COMPONENT
            {spotReviews?.map((review) =>
            <div key={review?.id} className="reviewDiv">
                <p>{review?.User?.username}</p>
                <p>Rating: {review?.rating}</p>
                <p>Review: {review?.review}</p>
                {/* {console.log(spotReviews)} */}
                {sessionUser?.id === review?.User?.id ? (
                    <button onClick={handleDelete}>Delete</button>
                ):null }
            </div>
            )}
        </div>
    )

}

export default SpotReview;
