import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import NewUserChart from './NewUserChart';
import UserTable from './UserTable';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export default function UsersContainer() {
  const classes = useStyles();
  const [data, setData] = useState({
    newUsers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    users: [],
  });
  
  async function fetchData() {
    const url = "/analytics/data/users";
    // const url = "http://localhost:8000/analytics/data/users";
    const res = await fetch(url);
    res.json()
    .then(analytics => {
      setData(analytics)
    })
    .catch(err => console.log(err));
  }
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <NewUserChart newUsers={data.newUsers} />
      <UserTable users={data.users} />
    </div>
  );
}