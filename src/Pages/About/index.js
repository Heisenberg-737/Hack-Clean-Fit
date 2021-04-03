import React from 'react';
import aboutImage from '../images/Clean-Fit (6)-cutout.png'
import './index.css';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';

class About extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return(
            <div className="about">
                <img src={aboutImage} className="about-image"/>
                <p>
                    <h5 style={{fontWeight: 'bold'}}>
                        Plogging is a combination of jogging with picking up litter (Swedish: plocka upp). It started as an organised activity in Sweden around 2016 and spread to other countries in 2018, following increased concern about plastic pollution. As a workout, it provides variation in body movements by adding bending, squatting and stretching to the main action of running, hiking, or walking.
                    </h5>
                </p>
                <p><h4 style={{fontWeight: 'bold'}}>And now you can do it, too!</h4></p>

                <h6>
                    <p>Made By:</p> 
                    <div className="made-by">
                        <a href="https://github.com/Daksh-404" target="_blank" style={{textDecoration: 'none'}}><p style={{padding: '10px'}}>Daksh Gupta</p></a>
                        <a href="https://www.linkedin.com/in/dhruv-atreja" target="_blank" style={{textDecoration: 'none'}}><p style={{padding: '10px'}}>Dhruv Atreja</p></a>
                        <a href="https://www.linkedin.com/in/pranay-kothari-423158190/" target="_blank" style={{textDecoration: 'none'}}><p style={{padding: '10px'}}>Pranay Kothari</p></a>
                        <a href="https://github.com/yash-sethia" target="_blank" style={{textDecoration: 'none'}}><p style={{padding: '10px'}}>Yash Sethia</p></a>
                    </div>
                </h6>

                

                <div className="CTA-btn">
                    <Link to='/'>
                        <Button>
                            <h6>Go Back</h6>
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }
};

export default About