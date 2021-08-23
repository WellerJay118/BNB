import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { submitReview } from '../../store/reviews';

const ReviewForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const sessionUser = useSelector(state => state.session.user);

    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [valErrors, setValErrors] = useState([]);

    useEffect (() => {
        const errors = [];
        if(review.length === 0) errors.push("Please fill out the review form fully");
        if(!rating) errors.push("Choose a valid rating from the drop down")
        //set errors
        setValErrors(errors)
    }, [review, rating])

    const handleSubmit = async(e) => {
        e.preventDefault();
        const payload = {
            userId: sessionUser.id,
            spotId: id,
            review,
            rating
        }
        let newReview = await dispatch(submitReview(payload));
        if (newReview) {
            setReview('');
            setRating(0);
            console.log(id)
            history.push(`/spots/${id}`);
        }
    };



    return (
        <div className="reviewform__container">
            <div className="reviewform__wrapper">
                <h1>Please Review Us</h1>
                <div className="rate-review">
                    <textarea
                        className="review-submit"
                        value={review}
                        placeholder="Please only leave your reviews here, nothing else..."
                        onChange={(e) => setReview(e.target.value)}
                    />
                    <div className="rate-submit">
                        <label>Rating</label>
                        <select value={rating} onChange={(e) => setRating(e.target.value)} className="rate-select">
                            <option disabled value="0"></option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </div>
                </div>
                <button
                className="submitReview-button"
                type="click"
                disabled={valErrors.length > 0}
                onClick={handleSubmit}
                >Submit Review</button>

            </div>
        </div>
    )
};

export default ReviewForm;
