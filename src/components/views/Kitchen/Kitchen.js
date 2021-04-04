import React from 'redux';
// import PropTypes from 'prop-types';
import styles from './Kitchen.module.scss';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
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

const Kitchen = () => (
  <div className={styles.component}>
    <Grid item xs={12} md={6}>
      <Typography variant="h6">
            Miejsce na listę 
      </Typography>
      <div>
        <List>

          <ListItem>
            <Checkbox
              defaultChecked
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <ListItemText
              primary="Single-line item"
              secondary='Secondary text'
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>

        </List>
      </div>
    </Grid>
    <h2>Kitchen view</h2>
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

export default Kitchen;