// import { useLocation } from 'react-router';
import React from 'redux';
// import PropTypes from 'prop-types';
import styles from './TablesBookingId.module.scss';

const TablesBookingId = (props) => {
  // eslint-disable-next-line react/prop-types
  const id = props.match.params.id;
  return (
    <div className={styles.component}>
      <h2>Table Booking {id} view</h2>
    </div>
  );};



export default TablesBookingId;