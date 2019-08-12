import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles, rgbToHex } from '@material-ui/core/styles';

import Chart from 'chart.js';

var moment = require('moment');

const useStyles = makeStyles(theme => ({
  root: {
  },
  gridContainer: {
    maxWidth: 800,
    flexGrow: 1,
    width: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(1),
  },
}));


export default function NewUserChart() {
  const chartRef = React.createRef();
  const classes = useStyles();
  const [data, setData] = useState([8, 2, 10, 6, 3, 4, 9, 2, 3, 0]);

  async function fetchData() {
    const url = "/analytics/data/newusers";
    const res = await fetch(url);
    res.json()
    .then(analytics => setData(analytics.new_user_counts))
    .catch(err => console.log(err));
  }

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
    fetchData();

    const labels = [];
    for (let i = 0; i < 10; i++) {
      labels.push(moment().subtract(i, 'days').format('l'));
    }

    new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: labels,
        datasets: [
          {
            label: "New Users",
            data: data,
            borderColor: '#6593a4',
            backgroundColor: 'transparent',
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'New Users'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        legend: {
          display: false,
        },
      }
    });
  }, []);

  return (
    <Grid
      className={classes.gridContainer}
      container spacing={2} justify='center' alignItems='center'
      alignContent='center'
    >
      <Grid item sm={12}>
        <Card className={classes.root}>
          <CardContent>
            <canvas
              id="myChart"
              ref={chartRef}
            />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}