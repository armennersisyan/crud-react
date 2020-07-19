import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';
import DefaultLayout from '../../layouts/Default';
import AuthLayout from '../../layouts/Auth';
import { getUserRequest } from '../../store/actions';

function RouteWrapper({ component: Component, isPrivate, ...rest }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = localStorage.getItem('auth-token');
  
  if (token && !isPrivate) {
    history.push('/home')
  }
  
  /**
   * Check if token exists in localStorage and requests a user's data
   */
  useEffect(() => {
    if (!token) return;
    dispatch(getUserRequest(token))
  }, [dispatch, history, token]);
  
  /**
   * Switch corresponding Layout
   */
  const Layout = isPrivate ? AuthLayout : DefaultLayout;
  
  return (
    <Route
      { ...rest }
      render={() => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export default RouteWrapper;
