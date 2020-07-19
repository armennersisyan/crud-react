import React  from 'react';
import { like } from "../UI/Icons";
import { useDispatch } from 'react-redux';
import { voteProjectRequest } from "../../store/actions";
import styles from './styles.module.scss';

function Project({ item }) {
  const dispatch = useDispatch();
  
  function handleVoteClick(id, likedByMe) {
    let type = likedByMe ? 'unlike' : 'like';
    dispatch(voteProjectRequest(id, type))
  }
  
  return (
    <div className={styles['project-item']}>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      <div className="d-flex align-items-center justify-content-center">
        <button
          onClick={() => handleVoteClick(item.id, item.votedByMe)}
          className={`${styles['project-item__vote-btn']} ${item.votedByMe ? styles.voted : ''}`}
          title={item.votedByMe ? 'Unlike' : 'Like'}
        >
          {like}
        </button>
        <span className={styles['project-item__votes']}>Votes - <strong>{item.votingsCount}</strong></span>
      </div>
    </div>
  );
}

export default Project;
