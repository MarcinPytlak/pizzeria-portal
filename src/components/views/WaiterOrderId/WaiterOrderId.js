import React from 'redux';
// import PropTypes from 'prop-types';
import styles from './WaiterOrderId.module.scss';

const WaiterOrderId = props => {
  // eslint-disable-next-line react/prop-types
  const id = props.match.params.id;
  return (
    <div className={styles.component}>
      <h2>Waiter order {id} view</h2>
    </div>
  );};

export default WaiterOrderId;