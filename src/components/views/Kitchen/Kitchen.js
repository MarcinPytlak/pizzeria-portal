import React from 'redux';
// import PropTypes from 'prop-types';
import styles from './Kitchen.module.scss';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const rows = [
  {id: 'Table 1', order:'Pizza with muschrooms and cheese, salad', status:'ischecked'},
  {id: ' order 123', order:'Pizza with bacon, starters: water', status:'ischecked'},
];

const renderActions = status => {
  switch (status) {
    case 'ischecked':
      return (
        <>
          <Checkbox inputProps={{ 'aria-label': 'controlled-checkbox' }} />
        </>
      );
    default:
      return null;
  }
};

const Kitchen = () => (
  <div className={styles.component}>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Order/Table number</TableCell>
            <TableCell align="center">Order information:</TableCell>
            <TableCell align="center">Realised ?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.order}</TableCell>
              <TableCell align="center">{renderActions(row.status)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
);

export default Kitchen;