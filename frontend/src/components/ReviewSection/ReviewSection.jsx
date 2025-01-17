import { useDispatch, useSelector } from 'react-redux';
import {  useEffect } from 'react';
import {  getSpotReviews, resetReviews , selectReviewsArray} from '../../store/reviews';
import { FaStar } from 'react-icons/fa';
import ReviewFormModal from '../ReviewFormModal';
import OpenModalButton from '../OpenModalButton/OpenModalButton';
import DeleteReviewModal from '../DeleteRaviewModal';
import './ReviewSection.css';

function ReviewSection({ spotId, spotOwnerId, avgStarRating, numReviews }){
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    let reviewsArr = useSelector(selectReviewsArray);//Object.values(useSelector((state) => state.reviews));
    const reviews = reviewsArr?.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

    const usersWithReviews = reviews?.map(review => review?.User?.id);

    useEffect(() => {
      dispatch(getSpotReviews(spotId)).catch(async (res) => {
        const data = await res.json();
        if (data && data.message) {
          dispatch(resetReviews());
        }
      });
    }, [dispatch, spotId]);

    const handlePostReviewClick = (e) => {
      e.preventDefault();
      e.stopPropagation();      
    }
    const handleDeleteReviewClick = (e) => {
      e.preventDefault();
      e.stopPropagation();      
    }
    
    if(!reviews) return <h3>Loading...</h3>;

    let ratingContent = !avgStarRating ? (
      <p><FaStar /> New</p>
      ) : (
      <p>
          <FaStar /> 
          <span> {avgStarRating}</span> 
          <span > &middot; </span> 
          <span> {numReviews > 1 ? `# ${numReviews} reviews` : `# ${numReviews} review`}</span>
      </p>
    );

    return (
      <div className="reviews-section">
        <div className="reviews-header">
          <span>
          {ratingContent}
          </span>
        </div>
        {sessionUser && !reviews.length && spotOwnerId !== sessionUser?.id && (
            <p>Be the first to post a review!</p>
          )}
        {sessionUser && spotOwnerId !== sessionUser?.id && !usersWithReviews.includes(sessionUser?.id) &&(
            <div className='post-review-button'>
              <OpenModalButton 
                buttonText="Post Your Review"
                onButtonClick={handlePostReviewClick}
                modalComponent={<ReviewFormModal spotId={spotId} />}
              />
            </div>
          )}
        <div className="reviews-list">          
          {reviews?.map((review) => (
            <div key={review?.id} className="spot-review">
              <h3 className="review-user">{review?.User?.firstName}</h3>
              <p className='review-date'>
                {new Date(review?.updatedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  timeZone: "UTC",
                })}
              </p>
              <p className='review-text'>{review?.review}</p>
              {review?.User?.id === sessionUser?.id && (
                <div className='delete-review-button'>
                  <OpenModalButton 
                    buttonText="Delete"
                    onButtonClick={handleDeleteReviewClick}
                    modalComponent={<DeleteReviewModal reviewId={review?.id} spotId={spotId} />}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
}

export default ReviewSection;