/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const min = 100;
const max = 999;

class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    changeStatus: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  changeTableStatus(id, status, order) {
    let payload = {};
    if(order != null) {
      payload = {
        status: status,
        order: order,
      };
    } else {
      payload = {
        status: status,
      };
    }
    this.props.changeStatus(id, payload);
  }

  getRandom() {
    return (Math.floor(Math.random() * (max-min + 1)) + min).toString();
  }

  renderActions(status, tableId, orderId){
    switch (status) {
      case 'free':
        return (
          <>

            <Button onClick={() => this.changeTableStatus(tableId, 'thinking', 'null')}>thinking</Button>
            <Button onClick={() => this.changeTableStatus(tableId, 'ordered', this.getRandom())}>new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button onClick={() => this.changeTableStatus(tableId, 'ordered', this.getRandom())}>new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => this.changeTableStatus(tableId, 'prepared', orderId)}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => this.changeTableStatus(tableId, 'delivered', orderId)}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => this.changeTableStatus(tableId, 'paid', orderId)}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => this.changeTableStatus(tableId, 'free', 'null')}>free</Button>
        );
      default:
        return null;
    }
  }
  render() {
    const { loading: { active, error }, tables} = this.props;

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button href={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.status, row.id, row.order)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;