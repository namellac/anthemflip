import React from "react";
export default class Heading extends React.Component {
  imgURL='/images/background.png';
 bgimg ={
    backgroundImage: 'url(' + imgURL +')'
  };

  render() {
    return (

<div class="bgimg">
<h2>Welcome Anthem USER!</h2>
Let's build something great today
</div>

    )
  }
}
