import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 200,
  },
  title: {
    fontSize: 22,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function NumUsersCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography 
          className={classes.title} color="textSecondary" gutterBottom
          component="h1"
        >
          Posts
        </Typography>
        <Typography variant="h5" component="h2">
          {props.data}
        </Typography>
      </CardContent>
    </Card>
  );
}