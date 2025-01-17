import { useModal } from "../../context/Modal";
import StarRatingInput from "../StarRatingInput";
import { useState, useEffect } from 'react';
import { createReview } from '../../store/reviews';
import { useDispatch } from 'react-redux';
import './ReviewFormModal.css';

function ReviewFormModal({ spotId }){
    const dispatch = useDispatch();
    const [stars, setStars] = useState(0);
    const [review, setReview] = useState('');
    const [errors, setErrors] = useState({});
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const { closeModal } = useModal();
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        if (  review.trim().length < 10 ||   parseInt(stars) < 1 ) {
          setIsButtonDisabled(true);
        } else {
          setIsButtonDisabled(false);
        }
    }, [review, stars]);

    const reset = () => {
        setStars(0);
        setReview('');
    };
    const handleSubmitReview = (e) => {
        e.preventDefault();
        setHasSubmitted(true);
        // console.log({review, stars})
        // closeModal();
        dispatch(createReview(spotId, {review, stars}))
            .then((data) => {
                if (data.id) {
                    setErrors({});
                    reset();
                    setHasSubmitted(false);
                    closeModal();
                }
            })
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.message) {
                    setHasSubmitted(true);
                    setErrors({ review: "Review already exists for this spot"});
                 }
             });
        
    }

    const onChange = (number) => {
        setStars(number);
    };

    return (
        <form className="create-review-form" 
                onSubmit={handleSubmitReview}
        >
            <h1 className="review-form-title">How was your stay?</h1>
            <div className='errors'>{hasSubmitted && errors.review && `${errors.review}`}</div>
            <input type="text" className="review-form-input"
                placeholder="Leave your review here..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
             />
            <div className="review-stars">
                <div className="star-rating">
                <StarRatingInput
                    disabled={false}
                    onChange={onChange}
                    rating={stars}
                />      
                </div>
                <label> Stars</label>
            </div>
            <button type="submit" 
                className="review-submit-button"
                disabled={isButtonDisabled}
            >Submit Your Review</button>
        </form>
    );
}

export default ReviewFormModal;