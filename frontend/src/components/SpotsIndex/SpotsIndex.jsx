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

  return (
    <div className='spots-index'>
        {spots?.map((spot) => (
            <SpotIndexItem key={spot.id} spot={spot}  />
        ))}
    </div>
  );
}

export default SpotsIndex;