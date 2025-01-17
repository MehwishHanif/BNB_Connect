import { FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './SpotIndexItem.css';
import { useNavigate } from 'react-router-dom';
import OpenModalButton from '../OpenModalButton/OpenModalButton';
import DeleteSpotModal from '../DeleteSpotModal';

function SpotIndexItem({ spot , actionType}){
  const navigate = useNavigate();
  
  const handleDeleteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/spots/${spot?.id}/edit`);
  }
  let ratingContent = !spot.avgRating ? (
    <><FaStar /> New</>
    ) : (
    <>
        <FaStar /> 
        <span> {spot?.avgRating}</span> 
    </>
    );
    return (
      <NavLink to={`/spots/${spot?.id}`}>
        <div className="spot-tile">
          <div className="spot-tile-image">
            <img src={spot?.previewImage} title={spot?.name}></img>
          </div>
          <div className="spot-tile-desc">
            <div className="spot-tile-desc-first">
              <div>
                {spot?.city}, {spot?.state}
              </div>
              <div className='rating-star-input'>
                {ratingContent}
              </div>
            </div>
            <div className="spot-tile-desc-second">
              <div>{actionType === "Get User Spots" ? (<span>$ {spot?.price}</span>):(<span>$ {spot?.price?.split(".")[0]}</span>)} night</div>
            </div>
          </div>
          {actionType === "Get User Spots" && (
            <div className='update-delete-button'>
              <button onClick={handleUpdate}>Update</button>
              <OpenModalButton 
                buttonText="Delete"
                onButtonClick={handleDeleteClick}
                modalComponent={<DeleteSpotModal spotId={spot?.id} />}
              />
            </div>
          )}
        </div>
      </NavLink>
    );
}

export default SpotIndexItem;