import { useDispatch, useSelector } from 'react-redux';
import {  useEffect } from 'react';
import {  getSpotReviews, resetReviews } from '../../store/reviews';
import { FaStar } from 'react-icons/fa';

function ReviewSection({ spotId, spotOwnerId, avgStarRating, numReviews }){
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    let reviewsArr = Object.values(useSelector((state) => state.reviews));
    const reviews = reviewsArr.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

    useEffect(() => {
      dispatch(getSpotReviews(spotId)).catch(async (res) => {
        const data = await res.json();
        if (data && data.message) {
          dispatch(resetReviews());
        }
      });
    }, [dispatch, spotId]);

    return (
      <div className="reviews-section">
        <div className="reviews-header">
          <p>
            {numReviews === 0 ? (
              <>
                <FaStar /> <span>New</span>
              </>
            ) : numReviews === 1 ? (
              <>
                <FaStar />
                <span>
                  {typeof avgStarRating === 'number' ? avgStarRating?.toFixed(1) : null} &middot; {` # ${numReviews} `}{" "}
                  review
                </span>
              </>
            ) : (
              <>
                <FaStar />
                <span>
                {typeof avgStarRating === 'number' ? avgStarRating?.toFixed(1) : null} &middot; {` # ${numReviews} `}{" "}
                  reviews
                </span>
              </>
            )}
          </p>
        </div>
        <div className="reviews-list">
          {!reviews.length && spotOwnerId !== sessionUser.id && (
            <p>Be the first to post a review!</p>
          )}
          {reviews?.map((review) => (
            <div key={review?.id} className="spot-review">
              <h3 className="review-user">{review?.User?.firstName}</h3>
              <p>
                {new Date(review?.updatedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  timeZone: "UTC",
                })}
              </p>
              <p>{review?.review}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default ReviewSection;