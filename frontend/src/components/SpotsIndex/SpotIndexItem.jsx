import { FaStar } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './SpotIndexItem.css';

function SpotIndexItem({ spot }){
    
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
                <FaStar /> {spot?.avgRating ? spot?.avgRating?.toFixed(1) : "New"}
              </div>
            </div>
            <div className="spot-tile-desc-second">
              <div>$ {spot?.price} night</div>
            </div>
          </div>
        </div>
      </NavLink>
    );
}

export default SpotIndexItem;