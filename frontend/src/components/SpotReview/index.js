import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteReview, getReview } from '../../store/reviews';

const SpotReview = ({ spotId, reviewId}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const reviews = useSelector(state => Object.values(state.reviews));
    const spotReviews = reviews.filter(review => Number(review.spotId) === Number(spotId));
    const sessionUser = useSelector(state => state.session.user);


    useEffect(() => {
        dispatch(getReview());
    }, [dispatch])

    //reviewId below doesnt send right info to backend. reviewId needs to be the review id at that location. If I can pass the reviewId from the delete button this can work.
/*
const handleDelete = (reviewId) => {
    return async(e) => {
        e.preventDefault();
        await dispathc(deleteReview(reviewId))
        history.push(`/spots/${spotId}`)
    }
}
*/

    const handleDelete = async(e) => {
        e.preventDefault();
        await dispatch(deleteReview(e.target.id))
        history.push(`/spots/${spotId}`)
    }

    return (
        <div className="test"> REVIEWS COMPONENT
            {spotReviews?.map((review) =>
            <div key={review?.id} className="reviewDiv">
                <p>{review?.User?.username}</p>
                <p>Rating: {review?.rating}</p>
                <p>Review: {review?.review}</p>
                {sessionUser?.id === review?.userId ? (
                    <button id={review.id} onClick={handleDelete}>Delete</button>
                ):null }
            </div>
            )}
        </div>
    )

}

export default SpotReview;
