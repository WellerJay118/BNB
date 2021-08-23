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
        <div className="test">
            <form onSubmit={handleSubmit}>
                <h1>Please Review Us</h1>
                <select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option disabled value="0"></option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                <textarea
                    value={review}
                    placeholder="Please only leave your reviews here, nothing else..."
                    onChange={(e) => setReview(e.target.value)}
                />
                <button
                type="submit"
                disabled={valErrors.length > 0}
                >Submit Review</button>
            </form>
        </div>
    )
};

export default ReviewForm;
