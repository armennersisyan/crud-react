import React, { useCallback } from 'react';
import { useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import { logOut } from '../../components/UI/Icons';
import links from './links';
import styles from './styles.module.scss';

function Sidebar() {
  const history = useHistory();
  const layout = useSelector((state) => state.layout);
  
  const handleUserLogout = useCallback(() => {
    localStorage.removeItem('auth-token');
    history.push('/sign-in')
  },[history]);
  
  return (
    <aside className={`${styles.aside} ${layout.sidebar ? styles['aside--open'] : ''}`}>
      <div className={styles['aside__brand']}>
        <span>Team Builder</span>
      </div>
      <ul className={styles['aside__nav']}>
        { links && links.map((link) => (
          <li
            key={`${link.to}${link.name}`}
            className={history.location.pathname === link.to ? styles['active-nav'] : ''}
          >
            <Link to={link.to}>{link.icon}{link.name}</Link>
          </li>
        )) }
        <li>
          <span className={styles.nav} onClick={handleUserLogout}>{logOut}Log Out</span>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar;
