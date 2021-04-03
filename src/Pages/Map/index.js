import React, {PureComponent, Fragment} from 'react';
import { withRouter } from 'react-router-dom';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import { BASEL_COORDS } from '../../Components/PlogMap';

import { Card, Button, Icon, Alert } from 'antd';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import { CARD_STYLE, CARD_HEAD_STYLE } from '../Main/index';

import './index.css';

import axios from 'axios';

// Convert Array of object to 2D
// Change BASEL_COORDINATES




const CLEANLINESS_LEVELS =  [
  'very dirty',
  'quite dirty',
  'somewhat dirty',
  'quite clean',
  'spotless'
];
const CLEANLINESS_LEVEL_ADDITIONAL_BLURB =  [
  'Bring a wheelbarrow!',
  'Bring a bigger bag!',
  'Optimal conditions!',
  'Concentrate on your run!',
  "✨"
];

const createFakeRoute = (coordinates) => {
  let getRandomNrBetween = (min, max) => { // min and max included 
        return Math.random() * (max - min + 1) + min;
      },
      jiggle = (original, factor) => {return original * (1 + getRandomNrBetween(-10, 11)/factor)};
      

  const nrOfCoordinates = Math.floor(Math.random()*4 + 3);
  let route = [coordinates];

  for(let i = 0; i < nrOfCoordinates; i++) {
    route.push([jiggle(coordinates[0], 150000), jiggle(coordinates[1], 30000)]);
  }
  route.push(coordinates);

  return route;
};

const Line = ({ mapState: { width, height }, latLngToPixel, coordsArray, style = { stroke: 'rgb(255,0,0)', strokeWidth: 2, fill: 'none' } }) => {
  if (coordsArray.length < 2) {
    return null
  }

  let customLngToPixel = (coordsObject) => {
    return latLngToPixel([coordsObject[0], coordsObject[1]]);
  }

  let lines = []
  let pixel = customLngToPixel(coordsArray[0])

  for (let i = 1; i < coordsArray.length; i++) {
    let pixel2 = customLngToPixel(coordsArray[i])
    lines.push(<line key={i} x1={pixel[0]} y1={pixel[1]} x2={pixel2[0]} y2={pixel2[1]} style={style} />)
    pixel = pixel2
  }

  return (
    <svg width={width} height={height} style={{ top: 0, left: 0 }}>
      {lines}
    </svg>
  )
}

class MapPage extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isLoadingRoute: true,
      routeAccepted: false,
      route: [],
      expectedCleanliness: 0.0,
      showingHint: false
    }
  }

  componentDidMount() {
    const {
      distance,
      latitude,
      longitude,
      UID
    } = this.getParameters();
    const userInputs = {
      distance: distance,
      longitude: longitude,
      latitude: latitude,
      uid: UID
    }
    console.log("hhh", userInputs)
    axios.post('backend/cleanrun', {userInputs}).then(res => {
      console.log("yyy", res.data);
      var coor = [];
      var temp = [];
      for(let i = 0; i < res.data.coordinates.length; i++) {
        coor.push([res.data.coordinates[i].lat, res.data.coordinates[i].long]);
      }
      console.log("Coor: ", coor);
      this.setState({
        route: coor,
        expectedCleanliness: 2.5844512145240515,
        isLoadingRoute: false
      });
      console.log("Pokemon : ", this.state)
    this.getRoute();
  })
  .catch(res => console.log("ERROR : ", res))
}

  getRoute(options = {}) {
    const {
      distance,
      latitude,
      longitude
    } = this.getParameters();

    this.setState({
      isLoadingRoute: true,
      routeAccepted: false
    }, () => {
         this.setState({
          route: createFakeRoute([latitude, longitude]),
          expectedCleanliness: Math.random()*5,
          isLoadingRoute: false
        });

        console.log("Pikachu I choose You!", this.state);
      })
    
    }

  getParameters() {
    let parameters = {
      distance: 1,
      latitude: BASEL_COORDS[0],
      longitude: BASEL_COORDS[1],
      UID: 0
    };

    if (this.props && this.props.location && this.props.location.state) {
      const { distance, latitude = parameters.latitude, longitude = parameters.longitude, UID } = this.props.location.state;
      parameters = {
        distance: distance,
        latitude: latitude,
        longitude: longitude,
        UID: UID
      };
    }

    return parameters;
  }

  confirmRoute() {
    let allUnverifiedRoutes = [];

    allUnverifiedRoutes.push({
      confirmed: Date.now(),
      route: this.state.route
    });

    this.setState({
      routeAccepted: true
    });
  }

  render() {
    const { latitude, longitude } = this.getParameters();
    const {
      isLoadingRoute,
      route,
      expectedCleanliness,
      routeAccepted,
      showingHint
    } = this.state;

    // adjust cleanliness expectations for demo purposes.
    let adjustedExpectations = expectedCleanliness > 3 ? expectedCleanliness - .6 : expectedCleanliness;

    var items = []
      console.log("size",route.length);

    for (let i=1;i<route.length;i++) {
      items.push(<Marker anchor={route[i]} payload={0} />)
    }

    return (
        <Fragment>
          <Backdrop style={{zIndex: '10', color: '#fff'}} open={isLoadingRoute}>
            <CircularProgress color="inherit" />
          </Backdrop>
          
          { !isLoadingRoute && (
            <Fragment>

              <div className="final-route-map">
              <Card style={CARD_STYLE} headStyle={CARD_HEAD_STYLE} title="Get ready!">
                <p>How about this route?</p>
                  <Map
                    center={[latitude, longitude]}
                    height={400}
                    width={600}
                    style={{alignItems: 'center'}}
                    zoom={15}
                  >
                    <Marker anchor={[latitude, longitude]} payload={1} />
                    {items}
                    <Line coordsArray={route} />
                  </Map>
                  <p style={{"marginTop": "8px", "marginBottom": "16px"}}>We expect the route to be <span style={{"fontWeight": "bold"}}>{CLEANLINESS_LEVELS[Math.floor(adjustedExpectations)]}</span>. {CLEANLINESS_LEVEL_ADDITIONAL_BLURB[Math.floor(adjustedExpectations)]}</p>
                {!routeAccepted && (
                  <div className="map__buttons1">
                      <Button onClick={() => this.getRoute({refresh: true})}>
                        <Icon type="sync-outlined," />
                        Change Route
                      </Button>
                      <Button onClick={() => this.confirmRoute()} style={{marginRight: '4vw'}}>
                        <Icon type="check-outlined" />
                        Let's Go!
                      </Button>
                  </div>
                )}

                {routeAccepted && (
                  <Fragment>
                    <p style={{"fontWeight": "bold"}}>Now go forth and clean this wretched place!</p>
                    <div className="map__buttons">
                      <Button type="default" onClick={() => this.setState({showingHint: true})} style={{marginLeft: '23vw'}}>
                        Share
                      </Button>
                    </div>
                    { showingHint && (
                      <Alert
                        style={{"marginTop": "16px", "marginLeft": "17vw"}}
                        message="Sorry, that's a post-hackday feature :)       "
                        type="info"
                        onClose={() => this.setState({showingHint: false})}
                      />
                    )}
                  </Fragment>
                )}
              </Card>
            </div>
              


            </Fragment>
          )}

        </Fragment>
    );
  }
}


export default withRouter(MapPage);
