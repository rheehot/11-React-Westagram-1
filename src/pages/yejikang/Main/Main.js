import React from "react";
import "./Main.scss";
import Nav from "../../../Components/Nav/Nav";
import Feeds from "./Components/Feeds/Feeds";
import Aside from "./Components/Aside/Aside";
import "../styles/base.scss";

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <Nav />
        <div className="Section">
          <Feeds />
          <Aside />
        </div>
      </div>
    );
  }
}

export default Main;