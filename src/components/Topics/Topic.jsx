import React from 'react';
import { Col } from 'react-bootstrap';
import { like } from '../UI/Icons';
import { voteTopicRequest, deleteTopicRequest } from '../../store/actions';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';

function Topic({ item }) {
  const dispatch = useDispatch();
  
  function handleVoteClick(id, likedByMe) {
    let type = likedByMe ? 'unlike' : 'like';
    dispatch(voteTopicRequest(id, type))
  }
  
  function handleTopicDelete(id) {
    dispatch(deleteTopicRequest(id))
  }
  
  return (
    <Col md={3}>
      <div className={styles['topic-item']}>
        { item.canDelete && (
          <button
            className={styles['topic-item__delete-btn']}
            onClick={() => handleTopicDelete(item.id)}
          >
            <i className="ti-trash" />
          </button>
        ) }
        <h4 className={styles['topic-item__title']} title={item.title}>{item.title}</h4>
        <div className={styles['topic-item__vote-wrapper']}>
          <button
            onClick={() => handleVoteClick(item.id, item.votedByMe)}
            className={`${styles['topic-item__vote-btn']} ${item.votedByMe ? styles.voted : ''}`}
            title={item.votedByMe ? 'Unlike' : 'Like'}
          >
            {like}
          </button>
          <span className={styles['topic-item__votes']}>Votes - {item.votingsCount}</span>
        </div>
      </div>
    </Col>
  );
}

export default Topic;
