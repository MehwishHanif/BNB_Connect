import { NavLink } from 'react-router-dom';
import { useDispatch,  useSelector } from 'react-redux';
import './ManageSpot.css';
import { useEffect } from 'react';
import { getUserSpots, selectUserSpotsArray } from '../../store/session';
import SpotIndexItem from '../SpotsIndex/SpotIndexItem';

function ManageSpot(){
    const dispatch = useDispatch();
    const spots = useSelector(selectUserSpotsArray);

    useEffect(() => {
        dispatch(getUserSpots())
    }, [dispatch]);

    if (!spots) return <h3>Loading...</h3>;

    return (
        <div className="manage-spots">
            <div className="manage-spots-header">
                <h1>Manage Your Spots</h1>
                { spots?.length < 1 ? (<button className="manage-create-spot-button">
                    <NavLink to="/spots/new">Create a New Spot</NavLink>
                </button>) : (null)}
            </div>
            <div className='user-spots-index'>
                {spots?.map((spot) => (
                    <SpotIndexItem key={spot.id} spot={spot} actionType="Get User Spots" />
                ))}
            </div>
        </div>
    );
}

export default ManageSpot;