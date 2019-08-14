import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

var moment = require('moment');

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 650,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    maxWidth: 650,
    width: '100%',
  },
}));


export default function UserTable(props) {
  const classes = useStyles();
  const { users } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="right">Date Joined</TableCell>
            <TableCell align="right">Login Count</TableCell>
            <TableCell align="right">Last Login</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(row => (
            <TableRow key={row.username}>
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell align="right">
                {moment(row.date_joined).format('YYYY-MM-DD')}
              </TableCell>
              <TableCell align="right">
                {row.login_count}
              </TableCell>
              <TableCell align="right">
                {moment(row.last_login).format('YYYY-MM-DD')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
