import React from 'react';

import Grid from '@material-ui/core/Grid';
import NumUsersCard from './NumUsersCard';
import NumPostsCard from './NumPostsCard';
import NumLikesCard from './NumLikesCard';
import NumFlagsCard from './NumFlagsCard';
import NumConvosCard from './NumConvosCard';
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

    return (
      <Grid 
        container className={classes.cardGrid} spacing={2}
        alignContent='center' alignItems='center' justify='center'
      >
        <Grid item sm={cardGridSize}>
          <NumUsersCard />
        </Grid>
        <Grid item sm={cardGridSize}>
          <NumPostsCard />
        </Grid>
        <Grid item sm={cardGridSize}>
          <NumLikesCard />
        </Grid>
        <Grid item sm={cardGridSize}>
          <NumFlagsCard />
        </Grid>
        <Grid item sm={cardGridSize}>
          <NumConvosCard />
        </Grid>
      </Grid>
    );
}