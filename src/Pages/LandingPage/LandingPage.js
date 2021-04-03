import React, {useContext} from 'react';
import { UserContext } from '../../AuthContext';
import './landingpage.css';
import SideImage from '../images/Clean-Fit (1).png';
import bgImage from '../images/Clean-Fit (2).png';
import aboutImage from '../images/Clean-Fit (3).png';
import startImage from '../images/Clean-Fit (4).png';
import 'semantic-ui-css/semantic.min.css';
import { Redirect } from 'react-router';

import GoogleLogin from 'react-google-login';

import axios from 'axios';
import { Link } from 'react-router-dom';

function PageChangeToDashboardFunction(props) {
  const [user, setUser] = useContext(UserContext);
    setUser({
      name: props.name,
      id: props.id,
      isAuth: true
    })

    console.log("Excuse me, User : ", user)
    console.log("Excuse me, User Pt2 : ", props)
    return( <Redirect to={'/dashboard'} /> );
}

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      UID: "",
      isLoggedIn: false,
      setUser: props.setUser
    };
    this.responseGoogle = this.responseGoogle.bind(this);
  }

  responseGoogle = (response) => {
    console.log("Google : ", response);
    this.setState({
        name: response.profileObj.name,
        email: response.profileObj.email,
        UID: response.googleId,
        isLoggedIn: true
    })
    console.log("State: ", this.state)
    var id = parseInt(this.state.UID);
    // console.log("iD2 : ", id)
    id = id / 10000;

    axios.post('backend/login', {
      'uid': id,
      'name': this.state.name,
      'email':  this.state.email
    }).then(res => {
      console.log(res)
    })
    .catch(err => console.log("ERROR : ", err))

    const user = {
      name: this.state.name,
      id: this.state.UID,
      isAuth: true
    }

    this.state.setUser(user);
  }


  render() {

    if(this.state.isLoggedIn) {
      return <PageChangeToDashboardFunction name={this.state.name} id={this.state.id} />
    }

    return (
      <div className="home-page">
          <img className="background-image"  src={bgImage} style={{height: '80vh', width: '80vw', zIndex: '1', marginTop: '-7vh', marginLeft: '12vw'}} alt="background Image" />
          <img className="side-image"  src={SideImage} style={{height: '130%', width: '85%', zIndex: '2', left: '-15vw', top: '-13vh', position: 'absolute'}} alt="Side Image" />  
          <span className="buttons-container">
            <Link to='/about'>
                <button style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px 20px', backgroundColor: 'white', border: 'none', width: '205px' }}>
                    <img src={aboutImage} style={{height: '30px', width: '65px', position: 'relative', float: 'left', backgroundColor: 'white'}} alt="About Image"/>
                    <strong style={{whiteSpace: 'nowrap'}}>ABOUT US</strong>
                </button>
            </Link>


                <GoogleLogin
                    clientId="806421049214-n6r6nfevkchfgpkourn4q5nqeo2i8ntv.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    render={renderProps => (
                        <button className="login-page" onClick={renderProps.onClick} disabled={renderProps.disabled} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '10px 20px', backgroundColor: 'white', border: 'none', width: '205px' }} >
                            <img src={startImage} style={{height: '30px', width: '65px', position: 'relative', float: 'left', backgroundColor: 'white'}} alt="About Image"/>
                            <strong style={{whiteSpace: 'nowrap'}}>GET STARTED</strong>
                        </button>
                    )}
                    cookiePolicy={'single_host_origin'}
                />

                
          </span>
      </div>
    );
  }
}

function LandingPageFunction() {
  const [user, setUser] = useContext(UserContext);
  return( <LandingPage setUser={setUser} /> );
}


export default LandingPageFunction;