import React from 'react';
import styles from './styles.module.scss'
import { useSelector } from "react-redux";
import avatarPlaceholder from '../../assets/img/avatar.png';

function Header({ sidebarOpen }) {
  const user = useSelector((state) => state.auth && state.auth.user);
  const avatar = user?.avatarUrl ? user.avatarUrl : avatarPlaceholder;
  
  return (
    <header className={`${styles.header} ${sidebarOpen ? styles.hasOffset : ''}`}>
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
