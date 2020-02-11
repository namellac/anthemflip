import React from "react";
import FlipCard from "react-flipcard";
import "./Anthem.css";

export default class Anthem extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { anthems: [] };
  }
  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "/payload/anthem.json")
      .then(response => response.json())
      .then(anthems => {
        anthems = anthems.filter(j => j.ID);
        this.setState({ anthems });
      });
  }
  render() {
    return (
      <div class="ReactFlipCardMobile">
        {this.state.anthems.map(anthem => {
          return (
            <FlipCard class=".ReactFlipCard__FrontMobile">
              <div align="center">
                <center>
                  <img src={process.env.PUBLIC_URL + anthem.frontimgurl} alt="" />
                  <div>{anthem.fronttext}</div>
                </center>
              </div>
              <div>
                <center>
                  <img src={process.env.PUBLIC_URL + anthem.backimgurl} alt="" />
                  <a href={anthem.backsidelink1}>
                    <br />
                    {anthem.backsidelinktext1}
                  </a>
                  <br />
                  <a href={anthem.backsidelink2}>{anthem.backsidelinktext2}</a>
                  <br />
                  <a href={anthem.backsidelink3}>{anthem.backsidelinktext3}</a>
                </center>
                <br />
              </div>
            </FlipCard>
          );
        })}
      </div>
    );
  }
}
