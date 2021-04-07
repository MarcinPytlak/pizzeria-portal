// import { useLocation } from 'react-router';
import React from 'redux';
// import PropTypes from 'prop-types';
import styles from './TablesBookingId.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';


const rows = [
  {id:'1', table: <TextField variant="outlined" size="small" defaultValue="1" type="text"></TextField>, 
    people: <TextField variant="outlined" size="small" defaultValue="2 adults" type="text"></TextField>,
    reservationDate: <TextField variant="outlined" size="small" defaultValue="14.04.2021" type="text"></TextField>, 
    duration:<TextField variant="outlined" size="small" defaultValue="2 hours" type="text"></TextField>, 
    reservationHour:<TextField variant="outlined" size="small" defaultValue="18:00" type="text"></TextField>, 
    starters: <TextField variant="outlined" size="small" type="text" defaultValue="water"></TextField>,
  },
  {id:'2', table: <TextField variant="outlined" size="small" defaultValue="2" type="text"></TextField>, 
    people: <TextField variant="outlined" size="small" defaultValue="3 adults" type="text"></TextField>,
    reservationDate: <TextField variant="outlined" size="small" defaultValue="12.04.2021" type="text"></TextField>, 
    duration:<TextField variant="outlined" size="small" defaultValue="1 hour" type="text"></TextField>, 
    reservationHour:<TextField variant="outlined" size="small" defaultValue="19:00" type="text"></TextField>, 
    starters: <TextField variant="outlined" size="small" type="text" defaultValue="vodka"></TextField>,
  },

];

const save = <Button
  variant="contained"
  color="primary"
  size="small"
  startIcon={<SaveIcon />}
>
Save
</Button>;

const TablesBookingId = (props) => {
  // eslint-disable-next-line react/prop-types
  const id = props.match.params.id;
  return (
    <div className={styles.component}>
      <h2>Table Booking {id} view</h2>
      <TableContainer component={Paper}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>Table:</TableCell>
              <TableCell align="center">Numer of people</TableCell>
              <TableCell align="center">Reservation start day</TableCell>
              <TableCell align="center">Duration</TableCell>
              <TableCell align="center">Reservation start hour</TableCell>
              <TableCell align="center">Starters</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.table}
                </TableCell>
                <TableCell align="right">{row.people}</TableCell>
                <TableCell align="right">{row.reservationDate}</TableCell>
                <TableCell align="right">{row.duration}</TableCell>
                <TableCell align="right">{row.reservationHour}</TableCell>
                <TableCell align="right">{row.starters}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {save}
    </div>
  );};



export default TablesBookingId;