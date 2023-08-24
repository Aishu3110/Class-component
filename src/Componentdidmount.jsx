import React, { Component } from "react";

export default class Componentdidmount extends Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 1000);
  }
  componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
  }
  render() {
    return (
      <>
        <div>
          <h1>Componentdidmount</h1>
          <p>My Favorite Color is {this.state.favoritecolor}</p>
          <div id="mydiv"></div>
        </div>
      </>
    );
  }
}
