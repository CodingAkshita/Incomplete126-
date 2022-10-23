import React from "react";

{/*Importing a class from Camera.js file*/}
import PickImage from "./Camera.js";

export default class App extends React.Component {
  render() {
    return <PickImage/>;
  }
}
