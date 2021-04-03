import React, { PureComponent, useContext, useEffect, useState } from 'react';
import { UserContext } from '../../AuthContext';
import { Link } from 'react-router-dom';
import DistanceSlider from '../../Components/DistanceSlider';
import { Card } from 'antd';
import PlogMap, { BASEL_COORDS } from '../../Components/PlogMap';
import distanceImage from '../images/distance.jpg';
import calorieImage from '../images/calorie.png';
import streakImage from '../images/streak.png';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import './index.css'

import Button from '@material-ui/core/Button';

import axios from 'axios';


export const CARD_STYLE = {"marginBottom": "24px"};
const CARD_STYLE1 = {
    "marginBottom": "50px",
};
export const CARD_HEAD_STYLE = {"fontSize": "24px", "lineHeight": "1", "textAlign": "center", "margin":"20px", "color": "white"};

class MainPage extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
        unverifiedRoutes: [],
        previousRoutes: [],
        distance: 1,
        coordinates: BASEL_COORDS,
        UID: this.props.uid
    };
  }

  render() {
    const {
        distance,
        coordinates,
    } = this.state;

    var { uid } = this.props

    uid = parseInt(uid) / 10000;

    console.log("State at Dashboard : ", uid)

    return (
        <div>
            <Card style={CARD_STYLE1} headStyle={CARD_HEAD_STYLE} title="Where are you?">
                <p style={{color: "white", marginLeft: "35vw", marginTop: "-3vh"}}>(Due to limited data points the origin is fixed for route calculation)</p>
                <PlogMap
                    coordinates={coordinates}
                    distance={distance}
                    onCoordsChange={(newCoordinates) => this.setState({coordinates: newCoordinates})}
                />
            </Card>

            <Card style={CARD_STYLE} headStyle={CARD_HEAD_STYLE} title="How far would you like to run today?">
                <DistanceSlider distance={distance} onDistanceChange={(newDistance) => this.setState({distance: newDistance})} />
            </Card>

            <div className="box">
                <h1>
                    <Link
                        to={{
                            pathname: '/go',
                            state: {
                                distance: distance,
                                latitude: coordinates[0],
                                longitude: coordinates[1],
                                UID: uid
                            }
                        }}
                    >
                <Button variant="contained" color="primary" style={{marginLeft: '45vw', marginBottom: '50px'}}>
                    Let's Go!
                </Button></Link>
                </h1>
            </div>
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

    // useEffect(() => {
    console.log("Helo Hello : ", user);
    console.log("iD1 : ", user.id)
    var id = parseInt(user.id);
    console.log("iD2 : ", id)
    id = id / 10000;
    console.log("iD3 : ", id)
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
            <h2 style={{fontWeight: '400', color: 'white', textAlign: 'center', marginBottom: '5vh'}}> Hey {user.name}! </h2>
              <Grid container spacing={2} >
                      <Grid item xs={4}>
                          <Paper style={{margin: '5px', padding: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center'}} elevation={3}>
                              <Avatar alt="Remy Sharp" src={distanceImage} className={classes.large} />
                              <div className="history-card-text">
                                  <h6>Distance Covered</h6>
                                  <h4> {tdist} Km </h4>
                              </div>
                          </Paper>
                      </Grid>
                      <Grid item xs={4}>
                          <Paper style={{margin: '5px', padding: '10px', display: 'flex', flexDirection: 'row', alignItems: 'center'}} elevation={3}>
                              <Avatar alt="Remy Sharp" src={calorieImage} className={classes.large} />
                              <div className="history-card-text">
                                  <h6>Calories Burnt</h6>
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
              <MainPage uid={user.id} />
      </div>
    );
  }
