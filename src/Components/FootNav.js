import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    background: '#3f51b5',
  },
  icon:{
    color: 'white',
  }
});

export default function FootNav({screenConfig}) {
  const classes = useStyles();

  return (
    <BottomNavigation
      value={screenConfig[0]}
      onChange={(event, newValue) => {
        screenConfig[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction className={classes.icon} label="Global stats" icon={<RestoreIcon />} />
      <BottomNavigationAction className={classes.icon} label="Country stats" icon={<FavoriteIcon />} />
      <BottomNavigationAction className={classes.icon} label="Graphs" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
