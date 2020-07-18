import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AuthLayout({ children }) {
  const history = useHistory();
  const user = useSelector((state) => state.auth && state.auth.user);
  
  /**
   * Check if token doesn't exist in localStorage and redirects to /sign-up page
   */
  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (!token) {
      history.push('/sign-up')
    }
  }, []);
  
  const handleUserLogout = useCallback(() => {
      localStorage.removeItem('auth-token');
      history.push('/sign-in')
  },[history]);
  
  return (
    <div>
      <h1>AuthLayout</h1>
      <button onClick={handleUserLogout}>Log out</button>
      <p>{JSON.stringify(user)}</p>
      <img src={user?.avatarUrl} alt="avatar" />
      { children }
    </div>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthLayout;
