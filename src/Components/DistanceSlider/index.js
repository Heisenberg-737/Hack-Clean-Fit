import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-rangeslider'
import Typography from '@material-ui/core/Typography';
import 'react-rangeslider/lib/index.css'
import './index.css';

class DistanceSlider extends PureComponent {
  render() {
    const {
      distance = 1,
      onDistanceChange = () => {}
    } = this.props;

    return (
        <div className="distance-slider" style={{marginLeft: '18vw'}}>
            {/* <Slider
                min={1}
                max={21}
                value={distance}
                onChange={(value) => onDistanceChange(value)}
            />
            <h1>{distance} km</h1> */}
            <Typography id="discrete-slider-always" gutterBottom >
                <h3><strong>Distance</strong></h3>
            </Typography>
            <Slider
                min={1}
                max={25}
                value={distance}
                onChange={e => onDistanceChange(e)}
            />
            <Typography id="discrete-slider-always" gutterBottom>
                <h3><strong>{distance} Km</strong></h3>
            </Typography>
        </div>
    );
  }
}

DistanceSlider.propTypes = {
  distance: PropTypes.number,
  onDistanceChange: PropTypes.func
};


export default DistanceSlider;
