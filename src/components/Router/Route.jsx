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
  
  /**
   * Check if token exists in localStorage and requests a user's data
   */
  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (!token) return;
    dispatch(getUserRequest(token)).then(() => {
      history.push('/home')
    });
  }, []);
  
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
