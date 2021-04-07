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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';


const rows = [
  {id: '17:00' , statusT1: null, statusT2: '1', statusT3: null},
  {id: '17:30' , statusT1: null, statusT2: '1', statusT3: '3'},
  {id: '18:00' , statusT1: '12', statusT2: '1', statusT3: '3'},
  {id: '18:30' , statusT1: '12', statusT2: null, statusT3: null},
  {id: '19:00' , statusT1: null, statusT2: null, statusT3: null},
  {id: '19:30' , statusT1: null, statusT2: '2', statusT3: null},
  {id: '20:00' , statusT1: null, statusT2: '2', statusT3: null},
  {id: '20:30' , statusT1: '13', statusT2: '5', statusT3: null},
  {id: '21:00' , statusT1: '13', statusT2: '5', statusT3: null},
  {id: '21:30' , statusT1: null, statusT2: '5', statusT3: null},
];



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
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Hours:</TableCell>
                <TableCell align="center">Table 1 (free or eventID</TableCell>
                <TableCell align="center">Table 2 (free or eventID</TableCell>
                <TableCell align="center">Table 3 (free or eventID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="cells">
                    {row.id}
                  </TableCell>
                  <TableCell align="center">
                    {row.statusT1 && (
                      <Button variant="outlined" color="secondary" href={`${process.env.PUBLIC_URL}/tables/event/${row.statusT1}`}>
                        {row.statusT1}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell align="center">
                    {row.statusT2 && (
                      <Button variant="outlined" color="secondary"  href={`${process.env.PUBLIC_URL}/tables/event/${row.statusT2}`}>
                        {row.statusT2}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell align="center">
                    {row.statusT3 && (
                      <Button variant="outlined" color="secondary" href={`${process.env.PUBLIC_URL}/tables/event/${row.statusT3}`}>
                        {row.statusT3}
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table> 
        </TableContainer>
      </Grid>
    </Grid>
  </div>
);

export default Tables;