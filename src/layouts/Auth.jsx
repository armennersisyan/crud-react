import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Aside from '../components/Sidebar';
import Header from '../components/Header';
import styles from './styles.module.scss';
import {useSelector} from "react-redux";

function AuthLayout({ children }) {
  const history = useHistory();
  const layout = useSelector((state) => state.layout);
  
  /**
   * Check if token doesn't exist in localStorage and redirects to /sign-up page
   */
  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    if (!token) {
      history.push('/sign-up')
    }
  }, [history]);
  
  return (
    <div className="wrapper">
      <Header sidebarOpen={layout.sidebar} />
      <Aside open={layout.sidebar} />
      <div className={`${styles.authWrapper} ${layout.sidebar ? styles.hasOffset : ''}`}>
        { children }
      </div>
    </div>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthLayout;
