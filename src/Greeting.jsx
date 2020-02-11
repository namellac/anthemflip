import React from "react";
import "./Anthem.css";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

export default class Anthem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { auth: [] };
  }
  componentDidMount() {
    //code to switch role
    var url = "/payload/authcoe.json";

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(d => {
        this.setState({ auth: d });
        console.log("state", this.state.auth);
      })
      .catch(error => console.log(error));
  }

  render() {
    
    return (
    
            <div>
            <BrowserView>
            <center>
            <div align="center" class="screenFiller">
              <div className="image-coe">
                <div className="coefont">
                  <br />
                  <br />
                  <br />
                  <h1>Welcome!</h1>
        
                   <p>Let's build something great today</p>
                </div>  
              </div>
            </div>
            </center>
        </BrowserView>
        <MobileView>
        <center>
              <div align="center" class="screenFiller">
              <div className="image-mobile">
                <div className="coefont">
                  <br />
                  <br />
                  <br />
                  <h1>Welcome!</h1>
        
                   <p>Let's build something<br/> great today</p>
                </div>  
              </div>
            </div>
            </center>
        </MobileView>
        </div>
          );
        }
      


  };

