import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Rating from '@material-ui/lab/Rating';
import Paper from '@material-ui/core/Paper';

const CardStyle = makeStyles({
  root: {
    minWidth: 275,
    boxShadow:4
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  card: {
    width: '100%',
    borderRadius: 10,
    boxShadow: '0 8px 16px 0 #BDC9D7',
    overflow: 'hidden',
    padding:20
  },
  paper: {
    height: 26,
    width: 60,
    background: 'gray',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0
  },
});

export default function BodyCard({appStorName,countryname,rating,reviewtext,reviewdate,userName,version,reviewheading}) {
  const classes = CardStyle();
  

  return (
    <Card className={classes.card} >
       <Grid container direction="column" spacing={2}>
       <Grid item xs container   justify="flex-start" spacing={2}>
            <Grid item >
                <Icon style={{color:"#9400D3", fontSize:"35px"}}>stop</Icon>
            </Grid>
            <Grid item   >
              <Paper className={classes.paper}>{appStorName}</Paper>
            </Grid>
            <Grid item style={{fontWeight:"bold"}}>
              {reviewheading}
            </Grid>
            <Grid item   >
              <Rating name="read-only" value={rating} readOnly />
            </Grid>
       </Grid>
       <Grid item xs container  spacing={2}>
       <Typography variant="body2" gutterBottom >
                  {reviewtext}
                </Typography>
       </Grid>
       <Grid item xs container  spacing={2}>
       <Grid item xs={12} sm={10} container  spacing={2} justify="flex-start">
            <Grid item >
                by {userName}
            </Grid>
            <Grid item  >
               {reviewdate} 
            </Grid>
            <Grid item  >
              {version}
            </Grid>
            <Grid item  >
              {countryname}
            </Grid>
       </Grid>
       <Grid item xs={12} sm={2} container  spacing={2} justify="flex-end">
            <Grid item  >
                reply
            </Grid>
            <Grid item  >
               Share
            </Grid>
           
       </Grid>
       </Grid>

       </Grid>
    </Card>
  );
}