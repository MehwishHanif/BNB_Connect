import { useDispatch,  useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllSpots, selectSpotsArray } from '../../store/spots';
import SpotIndexItem from './SpotIndexItem';
import './SpotsIndex.css';

function SpotsIndex() {
  const dispatch = useDispatch();
  const spots = useSelector(selectSpotsArray);

  useEffect(() => {
    dispatch(getAllSpots());
  }, [dispatch]);

  if (!spots) return <h3>Loading...</h3>;
  
  return (
    <div className='spots-index'>
        {spots?.map((spot) => (
            <SpotIndexItem key={spot.id} spot={spot} actionType="Get All Spots" />
        ))}
    </div>
  );
}

export default SpotsIndex;