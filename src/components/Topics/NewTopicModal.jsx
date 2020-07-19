import React from 'react';
import { Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { useDispatch } from 'react-redux';
import { addTopicRequest } from '../../store/actions';
import * as yup from 'yup';
import Error from '../UI/Error';

const schema = yup.object().shape({
  title: yup
    .string()
    .required('Title field is required'),
});

function NewTopicModal({ show, toggleModal }) {
  const dispatch = useDispatch();
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  });
  
  function onSubmit(data) {
    dispatch(addTopicRequest(data.title));
    toggleModal(false)
  }
  
  return (
    <Modal
      show={show}
      centered
      onHide={() => toggleModal(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add New Topic</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label htmlFor="title" className="txt-label">Topic Title</label>
        <input
          id="title"
          name="title"
          className={`txt-field ${errors.title?.message ? 'has-error' : null}`}
          placeholder="Topic Title"
          ref={register}
        />
        <Error show={errors.title?.message}>{ errors.title?.message }</Error>
      </Modal.Body>
      <Modal.Footer>
        <button className="primary-button" onClick={handleSubmit(onSubmit)}>Add Topic</button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewTopicModal;
