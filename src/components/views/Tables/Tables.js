import React from 'redux';
// import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

const Tables = () => (
  
  <div className={styles.component}>
    <Breadcrumbs>
      <Button component={Link} to="tables/booking/:id">Booking Id</Button>
      <Button component={Link} to="tables/booking/new">New booking</Button>
      <Button component={Link} to="tables/event/:id">Event Id</Button>
      <Button component={Link} to="tables/event/new">New event</Button>
    </Breadcrumbs>
    <h2>Table view</h2>
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <Typography variant='h4'>Select date</Typography>
        <form noValidate>
          <TextField
            id='date'
            label='Select data'
            type='date'
            defaultValue="2021-04-04"
          />
        </form>
      </Grid>
      <Grid item xs={6}>
        <Typography variant='h4'>Select time</Typography>
        <form noValidate>
          <TextField
            id='times'
            label='Select time'
            type='time'
            defaultValue="12:10"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300,
            }}
          />
        </form>
      </Grid>
      <Typography variant='h3'>Table:</Typography>
      <Grid item xs={12}>
        <Paper>miejsce na tabele</Paper>
      </Grid>
    </Grid>
  </div>
);

export default Tables;