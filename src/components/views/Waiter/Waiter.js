import React from 'redux';
// import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Button from '@material-ui/core/Button';

const Waiter = () => (
  <div className={styles.component}>
    <Breadcrumbs>
      <Button component={Link} to="waiter/order/new">Waiter new order</Button>
      <Button component={Link} to="waiter/order/:id">Waiter order id</Button>
    </Breadcrumbs>
    <h2>Waiter view</h2>
  </div>
);

export default Waiter;