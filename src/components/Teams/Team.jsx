import React, { useEffect, useState } from 'react';
import colors from '../../utils/colors';
import styles from './styles.module.scss'
import avatarPlaceholder from '../../assets/img/avatar.png';
import react from '../../assets/img/react.png';

function Team({ item, index }) {
  const [randomColors, setRandomColors] = useState(colors);
  
  useEffect(() => {
    function shuffle(a) {
      return a.sort(() => Math.random() - 0.5)
    }
    setRandomColors(shuffle(colors))
  }, []);
  
  return (
    <div className={styles['team-item']}>
      <div>
        <span className={styles['team-item__project']}>{item.project}</span>
        <div className={styles['team-item__icon']} style={{ backgroundColor: randomColors[index] }}>
          <img src={react} alt="React" />
        </div>
        <h4>{item.name}</h4>
        <h6 className={styles['team-item__topic']}>{item.topic}</h6>
        <div className={styles['team-item__members']}>
          {item.members && item.members.map(member => (
            <div
              key={member.firstName + member.lastName}
              className={styles['team-item__member']}
            >
              <img
                src={member.avatarUrl ? member.avatarUrl : avatarPlaceholder}
                alt={member.firstName + ' ' + member.lastName}
                title={member.firstName + ' ' + member.lastName}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
