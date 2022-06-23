import React, { useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: '0 auto',
    marginTop: 50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function InfoPanel() {
  // const [globalData, setGlobalData] = useState({});

  useEffect(() => {

    async function getData() {
      const response = await fetch("https://api.thevirustracker.com/free-api?global=stats")
      let data = await response.json();
      console.log(data.results[0]);
      console.log(data[1]);
      // setGlobalData(data.GLOBAL[0]);
    }
    getData();

  }, [])

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={3}>Covid Cases : 13</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={3}>Grid2</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={3}>Grid3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
