import React from "react";
class Card extends React.Component {
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
            this.setState({anthems});
        }
    }
//----------------

//----------------
  render() {
    return (
      <div className="Cards">
        {this.state.anthems.map(anthem => {
          return (
            <div className="ReactFlipCard ReactFlipCard--horizontal ReactFlipCard--enabled">
              <div className="Card">
                <img
                  src={process.env.PUBLIC_URL + anthem.frontimgurl__c}
                  alt=""
                />
                <div>{anthem.fronttext__c}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Card;
