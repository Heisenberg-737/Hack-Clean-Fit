import React, { Component, useContext, useState } from 'react';
import { UserContext } from '../../AuthContext';
import distanceImage from '../images/distance.jpg';
import calorieImage from '../images/calorie.png';
import streakImage from '../images/streak.png';
import dateImage from './Calender.png';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import './index.css'
import data from './data'
import { grey } from '@material-ui/core/colors';

import axios from 'axios';




export const CARD_STYLE = {"marginBottom": "24px"};
const CARD_STYLE1 = {
    "marginBottom": "50px",
};
export const CARD_HEAD_STYLE = {"fontSize": "24px", "lineHeight": "1", "textAlign": "center", "margin":"20px"};

class MainPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: data
    };
  }

  componentDidMount() {
    console.log("History ComponentDidMount ", this.props.uid);
    axios.post('backend/history', {'uid': this.props.uid}).then(res => {
      console.log("History Call", res.data)
      this.setState({
        data: res.data
      })
  })
}

  render() {

    const historytiles = this.state.data.map(item => {
      return (
        <Grid container xs={12}>
        {/* <div className="history-tile"> */}
        <Paper style={{margin: '5px', padding: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center', width: '90vw'}} elevation={3}>
        <Grid item xs={4}>
          <Paper style={{margin: '5px', padding: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center'}} elevation={3}>
              <Avatar alt="Remy Sharp" src={dateImage} className='avatar-large' />
              <div className="history-card-text">
                  <h6>Date</h6>
                  <h4> {item.date} </h4>
              </div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper style={{margin: '5px', padding: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center'}} elevation={3}>
              <Avatar alt="Remy Sharp" src={distanceImage} className='avatar-large' />
              <div className="history-card-text">
                  <h6>Distance Covered</h6>
                  <h4> {item.distance} Km </h4>
              </div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper style={{margin: '5px', padding: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center'}} elevation={3}>
              <Avatar alt="Remy Sharp" src={calorieImage} className='avatar-large' />
              <div className="history-card-text">
                  <h6>Calories Burnt</h6>
                  <h4> {item.calories} Kcal </h4>
              </div>
          </Paper>
        </Grid>
    {/* </div> */}
    </Paper>
    </Grid>
    );
    })

    return (
        <div>
          <Grid container xs={12}>
            {historytiles}
          </Grid>
        </div>
    );
  }
}


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      // flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
       width: '100%',
        height: theme.spacing(16),
      //   theme.spacing(16)
      },
    },
    large: {
      width: theme.spacing(9),
      height: theme.spacing(9),
      margin: '5px'
    },
  }));
  
  export default function Dashboard(props) {
    const classes = useStyles();

    const [user, setUser] = useContext(UserContext);
    const [tdist, setTDist] = useState(0);
    const [tcal, setTCal] = useState(0);

    // console.log("Helo Hello : ", user);
    // console.log("iD1 : ", user.id)
    var id = parseInt(user.id);
    // console.log("iD2 : ", id)
    id = id / 10000;
    // console.log("iD3 : ", id)
    axios.post('backend/totalrun', {'uid': id}).then(res => {
        console.log("yya", res.data);
        if(res.data[0].total_distance > 0) {
            setTDist(res.data[0].total_distance);
            setTCal(res.data[0].total_calories);
        }
    })
    .catch(err => console.log("ERROR : ", err))
  
    return (
        <div className="dashboard">
            <h2 style={{fontWeight: '400', color: 'white', textAlign: 'center', marginBottom: '5vh'}}>/ History /</h2>
              <Grid container spacing={2} >
                      <Grid item xs={4}>
                          <Paper style={{margin: '5px', padding: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center'}} elevation={3}>
                              <Avatar alt="Remy Sharp" src={distanceImage} className={classes.large} />
                              <div className="history-card-text">
                                  <h6>Total Distance Covered</h6>
                                  <h4> {tdist} Km </h4>
                              </div>
                          </Paper>
                      </Grid>
                      <Grid item xs={4}>
                          <Paper style={{margin: '5px', padding: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center'}} elevation={3}>
                              <Avatar alt="Remy Sharp" src={calorieImage} className={classes.large} />
                              <div className="history-card-text">
                                  <h6>Total Calories Burnt</h6>
                                  <h4> {tcal} Kcal </h4>
                              </div>
                          </Paper>
                      </Grid>
                      <Grid item xs={4}>
                          <Paper style={{margin: '5px', padding: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center'}} elevation={3}>
                              <Avatar alt="Remy Sharp" src={streakImage} className={classes.large} />
                              <div className="history-card-text">
                                  <h6>Streak</h6>
                                  <h4> 0 days </h4>
                              </div>
                          </Paper>
                      </Grid>
              </Grid>
              <div style={{marginLeft: '5vw', marginTop: '2vh'}}>
                <MainPage uid={id} />
              </div>
              
      </div>
    );
  }


