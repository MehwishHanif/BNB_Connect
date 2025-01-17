import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import { FaHome } from 'react-icons/fa';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <ul className='nav-wrapper'>
      <li className='nav-title'>
        <NavLink className="logo" to="/"><FaHome /><h2>BnBConnect</h2></NavLink>
      </li>
      {isLoaded && (
        <ul className='nav-actions'>
          {sessionUser? (<NavLink className="new-spot-link" to="/spots/new">Create a New Spot</NavLink>):(<></>)}
          <li className='nav-profile-btn'>
            <ProfileButton user={sessionUser} />
          </li>
        </ul>
      )}
    </ul>
  );
}

export default Navigation;