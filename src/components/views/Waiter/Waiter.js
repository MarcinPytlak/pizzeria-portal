import React from 'redux';
// import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';

const Waiter = () => (
  <div className={styles.component}>
    <ul>
      <li><Link to="waiter/order/new">Waiter new order</Link></li>
      <li><Link to="waiter/order/:id">Waiter order id</Link></li>
    </ul>
    <h2>Waiter view</h2>
  </div>
);

export default Waiter;