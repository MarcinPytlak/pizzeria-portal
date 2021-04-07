import React from 'redux';
// import PropTypes from 'prop-types';
import styles from './WaiterOrderId.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';


const rows = [
  {id:'1', table:<TextField variant="outlined" size="small" defaultValue="1" type="text"></TextField>, 
    menu:'Products menu', 
    productOptions:'choosen product options', 
    order: 'Ordered product with options and price', 
    orderValue:'Order total ammount'},
];
const WaiterOrderId = props => {
  // eslint-disable-next-line react/prop-types
  const id = props.match.params.id;
  return (
    <div className={styles.component}>
      <h2>Waiter order {id} view</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Table:</TableCell>
              <TableCell align="center">Product menu</TableCell>
              <TableCell align="center">Product options</TableCell>
              <TableCell align="center">Ordered product</TableCell>
              <TableCell align="center">TOTAL:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.table}
                </TableCell>
                <TableCell align="right">{row.menu}</TableCell>
                <TableCell align="right">{row.productOptions}</TableCell>
                <TableCell align="right">{row.order}</TableCell>
                <TableCell align="right">{row.orderValue}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );};

export default WaiterOrderId;