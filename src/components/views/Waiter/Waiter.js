import React from 'redux';
// import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const createData = (table, status, activityTime, deletion, add) => {
  return {table, status, activityTime, deletion, add};
};

const rows = [
  createData('1', 'status', '40 min ago', <Button size="small" variant="outlined" color="secondary">Delete</Button>, <Button size="small" variant="contained" color="primary">Add</Button> ),
  createData('2', 'status', '31 min ago', <Button size="small" variant="outlined" color="secondary">Delete</Button>, <Button size="small"  variant="contained"color="primary">Add</Button> ),
  createData('3', 'status', '42 min ago', <Button size="small" variant="outlined" color="secondary">Delete</Button>, <Button size="small"  variant="contained"color="primary">Add</Button> ),
];

const Waiter = () => (
  <div className={styles.component}>
    <Breadcrumbs>
      <Button component={Link} to="waiter/order/new">Waiter new order</Button>
      <Button component={Link} to="waiter/order/:id">Waiter order id</Button>
    </Breadcrumbs>
    <h2>Waiter view</h2>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Table</TableCell>
            <TableCell align="right">Table Status</TableCell>
            <TableCell align="right">Last activity</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.table}>
              <TableCell component="th" scope="row">
                {row.table}
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.activityTime}</TableCell>
              <TableCell align="right">{row.deletion}{row.add}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table> 
    </TableContainer>
  </div>
);

export default Waiter;