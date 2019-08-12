import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import CountCard from './CountCard';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    flexGrow: 1,
    maxWidth: 700,
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(2),
  },
}));

const cardGridSize = 4;

export default function CardContainer() {
    const classes = useStyles();
    const [data, setData] = useState({
      numUsers: 0,
      numPosts: 0,
      numBoards: 0,
      numBoardAlerts: 0,
      numBoardGenies: 0,
      numLikes: 0,
      numFlags: 0,
      numConvos: 0
    });

    const titles = [
      'Users', 'Posts', 'Boards', 'Board Alerts', 'Board Genies',
      'Likes', 'Flags', 'Convos'
    ]

    async function fetchData() {
      const url = "/analytics/data/counts";
      const res = await fetch(url);
      res.json()
      .then(analytics => setData(analytics))
      .catch(err => console.log(err));
    }

    function getData(title) {
      const name = title.replace(' ', '');
      return data['num' + name];
    }

    useEffect(() => {
      fetchData();
    }, []);

    return (
      <Grid 
        container className={classes.cardGrid} spacing={2}
        alignContent='center' alignItems='center' justify='center'
      >
        {titles.map((value, index) => (
          <Grid item sm={cardGridSize}>
            <CountCard title={value} data={getData(value)} />
          </Grid>
        ))}
      </Grid>
    );
}

      //   {/* <Grid item sm={cardGridSize}>
      //     <CountCard title='Users' data={data.numUsers} />
      //   </Grid>
      //   <Grid item sm={cardGridSize}>
      //     <CountCard title='Posts' data={data.numPosts} />
      //   </Grid>
      //   <Grid item sm={cardGridSize}>
      //     <CountCard title='Likes' data={data.numLikes} />
      //   </Grid>
      //   <Grid item sm={cardGridSize}>
      //     <CountCard title='Flags' data={data.numFlags} />
      //   </Grid>
      //   <Grid item sm={cardGridSize}>
      //     <CountCard title='Convos' data={data.numConvos} />
      //   </Grid>
      // </Grid> */}