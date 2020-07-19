import React  from 'react';
import styles from './styles.module.scss'
import avatarPlaceholder from '../../assets/img/avatar.png';

function Team({ item }) {
  return (
    <div className={styles['team-item']}>
      <div>
        <span className={styles['team-item__project']}>{item.project}</span>
        <h4>{item.name}</h4>
        <h6 className={styles['team-item__topic']}>{item.topic}</h6>
        <div className={styles['team-item__members']}>
          {item.members && item.members.map(member => (
            <div
              key={member.firstName + member.lastName}
              className={styles['team-item__member']}
            >
              <img src={member.avatarUrl ? member.avatarUrl : avatarPlaceholder} alt={member.firstName + ' ' + member.lastName}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
