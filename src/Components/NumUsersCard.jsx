import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
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

export default function NumUsersCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography 
          className={classes.title} color="textSecondary" gutterBottom
          component="h1"
        >
          Users
        </Typography>
        <Typography variant="h5" component="h2">
          42
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}