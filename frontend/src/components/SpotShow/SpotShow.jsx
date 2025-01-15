import { useDispatch, useSelector } from 'react-redux';
import {  useParams  } from 'react-router-dom';
import {  useEffect } from 'react';
import { getSpotDetails, selectSpotById } from '../../store/spotsDetails';
import { FaStar } from 'react-icons/fa';
import ReviewSection from '../ReviewSection/ReviewSection';
import './SpotShow.css';


function SpotShow(){
    const dispatch = useDispatch();
    const { spotId } = useParams();
    const spot = useSelector(selectSpotById(parseInt(spotId)));

    useEffect(() => {
      dispatch(getSpotDetails(spotId));
    }, [dispatch, spotId]);

    const previewImage = spot?.SpotImages.find( spotImg => spotImg.preview === true);
    const spotImages = spot?.SpotImages.filter( spotImg => spotImg.preview === false);
    const handleReserve = (e) => {
        e.preventDefault();
        alert("Feature Coming Soon...");
    }

    let ratingContent = !spot?.avgStarRating ? (
      <p><FaStar /> New</p>
      ) : (
      <p>
          <FaStar /> 
          <span> {spot?.avgStarRating}</span> 
          <span > &middot; </span> 
          <span> {spot?.numReviews > 1 ? `# ${spot?.numReviews} reviews` : `# ${spot?.numReviews} review`}</span>
      </p>
    );
    return (
      <div className="spot-details">
        <header className="spot-header">
          <h1>{spot?.name}</h1>
          <div className="spot-location">
            <p>{`${spot?.city}, ${spot?.state}, ${spot?.country}`}</p>
          </div>
        </header>
        <div className="spot-images">
          <div className="spot-preview-image">
            <img src={previewImage?.url}></img>
          </div>
          <div className="spot-other-images">
            {spotImages?.map((spotImage) => (
              <img src={spotImage?.url} key={spotImage?.id}></img>
            ))}
          </div>
        </div>
        <div className="spot-desc-reserve-section">
          <div className="spot-description-section">
            <h3>{`Hosted by ${spot?.Owner.firstName} ${spot?.Owner.lastName}`}</h3>
            <p>{spot?.description}</p>
          </div>
          <div className="spot-reserve-section">
            <div className="spot-info">
              <p>{`$${spot?.price}`}</p>
              <p> </p>
              <p>
              {ratingContent}
              </p>
            </div>
            <button className="spot-reserve-button" onClick={handleReserve}>Reserve</button>
          </div>
        </div>
        <ReviewSection spotOwnerId={spot?.Owner?.id} spotId={spotId} avgStarRating={spot?.avgStarRating} numReviews={spot?.numReviews} />
      </div>
    );
}

export default SpotShow;