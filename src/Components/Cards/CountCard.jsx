import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

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
  cardActions: {
    justifyContent: 'center',
  },
  button: {
    flexGrow: 1,
  },
});

export default function CountCard(props) {
  const classes = useStyles();
  const { title, data, route } = props;

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
      <CardActions className={classes.cardActions}>
        <Link to={route ? route : "/"}>
          <Button
            disabled={route ? false : true}
            className={classes.button}
            size="small"
            onClick={() => console.log(route)}
          >
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}