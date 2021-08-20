import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import * as sessionActions from "../../store/session";


function Navigation({ isLoaded }){
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const demoLogin = () => {
    const credential = 'Demo-lition'
    const password = 'password'
    return dispatch(sessionActions.login({ credential, password }))
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink className="Navbar-link" to="/spots/create">Become a Host</NavLink>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink className="Navbar-link" to="/signup">Sign Up</NavLink>
        <div>
            <button className="navbar-button Navbar-link" onClick={demoLogin}>Demo Login</button>
          </div>
      </>
    );
  }

  return (
    <div className="nav-links-container">
      <NavLink className="Navbar-link" exact to="/">Home</NavLink>
      <NavLink className="Navbar-link" exact to="/spots">Listings</NavLink>
      {isLoaded && sessionLinks}
   </div>
  );
}

export default Navigation;
