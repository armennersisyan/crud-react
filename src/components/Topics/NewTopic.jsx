import React from 'react';
import { Col } from 'react-bootstrap';
import { add } from '../../components/UI/Icons';
import styles from './styles.module.scss';

function NewTopic({ openModal }) {
  function handleAddNewClick() {
    openModal()
  }
  
  return (
    <Col md={3}>
      <div
        className={`${styles['topic-item']} ${styles['topic-item--new']}`}
        onClick={handleAddNewClick}
      >
        <button className={styles['topic-item__add']}>{add}</button>
        <p className={styles['topic-item__add-txt']}>Add New Topic</p>
      </div>
    </Col>
  );
}

export default NewTopic;
