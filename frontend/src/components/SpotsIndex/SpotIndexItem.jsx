import { FaStar } from 'react-icons/fa';
import './SpotIndexItem.css';

function SpotIndexItem({ spot }){
    
    return (
        <div className="spot-tile">
            <div className="spot-tile-image">
                <img src={spot.previewImage} title={spot.name}></img>
            </div>
            <div className="spot-tile-desc">
                <div className='spot-tile-desc-first'>
                    <div>{spot.city}, {spot.state}</div>
                    <div><FaStar /> {spot.avgRating ? spot.avgRating.toFixed(1): "New" }</div>
                </div>
                <div className='spot-tile-desc-second'>
                    <div>$ {spot.price} night</div>
                </div>                
            </div>
        </div>
    )
}

export default SpotIndexItem;