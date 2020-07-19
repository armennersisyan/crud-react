import React from 'react';
import styles from './styles.module.scss'
import { useSelector, useDispatch } from "react-redux";
import avatarPlaceholder from '../../assets/img/avatar.png';
import { closeSidebar } from '../UI/Icons';
import { toggleSidebar } from '../../store/actions';

function Header({ sidebarOpen }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth && state.auth.user);
  const layout = useSelector((state) => state.layout);
  const avatar = user?.avatarUrl ? user.avatarUrl : avatarPlaceholder;
  
  function handleToggleSidebar() {
    dispatch(toggleSidebar())
  }
  
  return (
    <header className={`${styles.header} ${sidebarOpen ? styles.hasOffset : ''}`}>
      <div>
        <button
          className={`${styles.toggler} ${layout.sidebar ? styles['toggler--open'] : ''}`}
          onClick={handleToggleSidebar}
        >
          {closeSidebar}
        </button>
      </div>
      <div>
        {user && (
          <div className={styles.user}>
            <img src={avatar} alt="avatar"/>
            <span>{user?.firstName} {user?.lastName}</span>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
