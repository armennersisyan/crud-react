import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import styles from './styles.module.scss';

function DefaultLayout({ children }) {
  return (
    <div className={styles.default}>
      <Container>
        { children }
      </Container>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultLayout;
