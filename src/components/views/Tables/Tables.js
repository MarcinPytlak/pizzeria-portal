import React from 'redux';
// import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Button from '@material-ui/core/Button';


const Tables = () => (
  
  <div className={styles.component}>
    <Breadcrumbs>
      <Button component={Link} to="tables/booking/:id">Booking Id</Button>
      <Button component={Link} to="tables/booking/new">New booking</Button>
      <Button component={Link} to="tables/event/:id">Event Id</Button>
      <Button component={Link} to="tables/event/new">New event</Button>
    </Breadcrumbs>
    <h2>Table view</h2>
  </div>
);

export default Tables;