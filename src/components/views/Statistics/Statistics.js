import React from 'redux';
// import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Statistics = () => (
  <div className={styles.root}>
    <h2 className={styles.title}>Daily statistics:</h2>
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Typography variant='h4'>Local Statistics</Typography>
        <Paper>Statystki lokalne</Paper>
      </Grid>
      <Grid item xs={6}>
        <Typography variant='h4'>Delivery Statistics</Typography>
        <Paper>Statystki zdalne</Paper>
      </Grid>
    </Grid>
    <h2 className={styles.title}>Events and reservation lists:</h2>
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Typography variant='h4'>Events list</Typography>
        <Paper>Lista eventów</Paper>
      </Grid>
      <Grid item xs={6}>
        <Typography variant='h4'>Reservation list</Typography>
        <Paper>lista rezerwacji</Paper>
      </Grid>
    </Grid>
  </div>
);

export default Statistics;