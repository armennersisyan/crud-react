import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

function Error({ show, children }) {
  return (
    !!show && (
      <p className={styles.error}>
        { children }
      </p>
    )
  );
}

Error.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default Error;
