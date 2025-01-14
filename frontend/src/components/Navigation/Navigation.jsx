import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  return (
    <ul className='nav-wrapper'>
      <li className='nav-title'>
        <NavLink to="/">BnB-Connect</NavLink>
      </li>
      {isLoaded && (
        <ul className='nav-actions'>
          {sessionUser? (<NavLink to="/spots/new">Create a New Spot</NavLink>):(<></>)}
          <li className='nav-profile-btn'>
            <ProfileButton user={sessionUser} />
          </li>
        </ul>
      )}
    </ul>
  );
}

export default Navigation;