import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from 'react-router-dom'

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
    //can add a toggle here to hide the profile button
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const profile = (e) => {
    e.preventDefault();
    history.push(`/users/${user.id}`)
  }

  return (
    <div className="profile__container">
      <button className="profilebutton" hidden={showMenu} onClick={openMenu}>
        <i className="far fa-address-card" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          {/* <li>{user.username}</li>
          <li>{user.email}</li> */}
          <button className="logout-button" onClick={profile}>My Profile</button>

          <li>
            <button className="logout-button" onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;
