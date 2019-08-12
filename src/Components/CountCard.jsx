
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 150,
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CountCard(props) {
  const classes = useStyles();
  const { title, data } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title} color="textSecondary" gutterBottom
          component="h1"
        >
          {title}
        </Typography>
        <Typography variant="h5" component="h2">
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
}