import React from "react";
import FlipCard from "react-flipcard";
import Card from './component/Card';
//import {SortableContainer, SortableElement} from 'react-sortable-hoc';


import "./Anthem.css";

export default class Anthem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { anthems: [], locked: true };
  }
  componentDidMount() {
    var anthems = [];
    if (localStorage.getItem("personalAnthem")) {
      //load from localstorage
      var retrievedData = localStorage.getItem("personalAnthem");
      console.log(retrievedData);
      anthems = JSON.parse(retrievedData);
      this.setState({ anthems });
    } else {
      //var url = process.env.PUBLIC_URL + "/payload/anthem.json";
      var url =
        "https://coelandingpagedev-developer-edition.na112.force.com/services/apexrest/v1/cards/CoE";

      fetch(url, { mode: "cors" })
        .then(response => response.json())
        .then(anthems => {
          anthems = anthems.filter(j => j.ID__c);
          this.setState({ anthems });
          localStorage.setItem("personalAnthem", JSON.stringify(anthems));
        });
      //personalize to local?
      console.log(JSON.stringify(anthems));
      if (true) {

        localStorage.setItem("personalAnthem", JSON.stringify(anthems));
      } else {
        console.log("array not stored");
      }
    }
  }
  toggleLock() {
    this.setState({ locked: !this.state.locked });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.toggleLock()}>
          {this.state.locked ? (
              <div>unlock layout</div>
          ):(
              <div>lock layout</div>
          )}
        </button>
        <div >
          {this.state.locked ? (
            this.state.anthems.map(anthem => {
              return (
                <FlipCard>
                  <div align="center">
                    <center>
                      <img
                        src={process.env.PUBLIC_URL + anthem.frontimgurl__c}
                        alt=""
                      />
                      <div>{anthem.fronttext__c}</div>
                    </center>
                  </div>
                  <div>
                    <center>
                      <img
                        src={process.env.PUBLIC_URL + anthem.backimgurl__c}
                        alt=""
                      />
                      <a href={anthem.backsidelink1__c}>
                        <br />
                        {anthem.backsidelinktext1__c}
                      </a>
                      <br />
                      <a href={anthem.backsidelink2__c}>
                        {anthem.backsidelinktext2__c}
                      </a>
                      <br />
                      <a href={anthem.backsidelink3__c}>
                        {anthem.backsidelinktext3__c}
                      </a>
                    </center>
                    <br />
                  </div>
                </FlipCard>
              );
            })
          ) :  (<div className="Cards">
                {this.state.anthems.map(anthem => {
                  return (
                      <Card />

                  );
                })}
              </div>

          )}
        </div>
      </div>
    );
  }
}
