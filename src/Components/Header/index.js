import React, {useContext} from 'react';
import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoImage from '../../Pages/images/Clean-Fit.png';
import Button from "@material-ui/core/Button";
import { UserContext } from '../../AuthContext';
import { Link } from 'react-router-dom';

export default function Header() {
    const [user, setUser] = useContext(UserContext);

    return(
        <Navbar bg="none" style={{zIndex: '10'}}>
            <Navbar.Brand href="/">
            <img alt="" src={logoImage} width="180" height="90" className="d-inline-block align-top" />
            </Navbar.Brand>
            {
              user.isAuth && (
              <Navbar.Collapse className="justify-content-end">
                <Link to="/dashboard">
                  <Button>
                    <span style={{ color: "white" }}>Dashboard</span>
                  </Button>
                </Link>

                <Link to="/history">
                  <Button>
                    <span style={{ color: "white" }}>History</span>
                  </Button>
                </Link>

                <Button onClick={() => {
                    setUser({
                        name: "",
                        id: "",
                        isAuth: false
                      })
                    window.location.href = '/'
                    }
                }>
                  <span style={{ color: "white" }}>Log Out</span>
                </Button>
              </Navbar.Collapse>
                )
            }   
        </Navbar>
    );
}