import { FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './SpotIndexItem.css';

function SpotIndexItem({ spot , actionType}){
  console.log("actionType: ",actionType);
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
              <div>
                {ratingContent}
              </div>
            </div>
            <div className="spot-tile-desc-second">
              <div>$ {spot?.price} night</div>
            </div>
          </div>
          {actionType === "Get User Spots" && (
            <div className='update-delete-button'>
            {/* `/spots/${spot?.id}/edit` */}
              <button><NavLink to={`/`}>Update</NavLink></button>
              <button>Delete</button>
            </div>
          )}
        </div>
      </NavLink>
    );
}

export default SpotIndexItem;