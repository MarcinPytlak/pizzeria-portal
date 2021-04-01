import React from 'redux';
// import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';


const Tables = () => (
  
  <div className={styles.component}>
    <ul>
      <li><Link to="tables/booking/:id">Booking Id</Link></li>
      <li><Link to="tables/booking/new">New booking</Link></li>
      <li><Link to="tables/event/:id">Event Id</Link></li>
      <li><Link to="tables/event/new">New event</Link></li>
    </ul>
    <h2>Table view</h2>
  </div>
);

export default Tables;