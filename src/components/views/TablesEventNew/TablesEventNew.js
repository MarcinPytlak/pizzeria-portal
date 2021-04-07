import React from 'redux';
// import PropTypes from 'prop-types';
import styles from './TablesEventNew.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const rows = [
  {table: <TextField size="small"  type="text">1</TextField>, 
    people: <TextField size="small"  type="text"></TextField>,
    reservationDate: <TextField size="small"  type="text"></TextField>, 
    duration:<TextField size="small"  type="text"></TextField>, 
    reservationHour:<TextField size="small"  type="text"></TextField>, 
    starters: <TextField size="small" type="text" ></TextField>,
    repeat:<TextField variant="outlined" size="small" type="text"></TextField>,
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

const TablesEventNew = () => (
  <div className={styles.component}>
    <h2>Table Event New view !!</h2>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Table:</TableCell>
            <TableCell align="center">Numer of people</TableCell>
            <TableCell align="center">Reservation start day</TableCell>
            <TableCell align="center">Duration</TableCell>
            <TableCell align="center">Reservation start hour</TableCell>
            <TableCell align="center">Starters</TableCell>
            <TableCell align="center">Is it repetable?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.table}>
              <TableCell component="th" scope="row">
                {row.table}
              </TableCell>
              <TableCell align="right">{row.people}</TableCell>
              <TableCell align="right">{row.reservationDate}</TableCell>
              <TableCell align="right">{row.duration}</TableCell>
              <TableCell align="right">{row.reservationHour}</TableCell>
              <TableCell align="right">{row.starters}</TableCell>
              <TableCell align="right">{row.repeat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {save}
  </div>
);

export default TablesEventNew;