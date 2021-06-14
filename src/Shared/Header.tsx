import React from "react";
import Spacer from "./Spacer";
import { useHistory } from "react-router-dom";
import "./Header.css";

const Menu = () => {
  let history = useHistory();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        fontSize: "12pt",
      }}
    >
      <div
        className="menu-item"
        onClick={() => {
          history.push("/");
        }}
      >
        ABOUT ME
      </div>
      <Spacer type="column" size="xxlarge" />
      <div
        className="menu-item"
        onClick={() => {
          history.push("/50-in-07");
        }}
      >
        50 IN '07: PREDICTIVE SPORTS ANALYTICS
      </div>
      <Spacer type="column" size="xxlarge" />
      <div
        className="menu-item"
        onClick={() => {
          history.push("/order-up");
        }}
      >
        ORDERUP!: LIVE ORDERING SYSTEM
      </div>
      <Spacer type="column" size="xxlarge" />
      <div
        className="menu-item"
        onClick={() => {
          history.push("/research");
        }}
      >
        RESEARCH AND PUBLICATIONS
      </div>
      <Spacer type="column" size="xxlarge" />
    </div>
  );
};

export default class Header extends React.Component {
  render() {
    return (
      <div
        style={{
          minHeight: "50px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        <div
          style={{
            fontSize: "30px",
            marginLeft: "40px",
            lineHeight: "50px",
          }}
        >
          TANYA TANG
        </div>
        <div style={{ flex: 1 }} />
        <Menu />
      </div>
    );
  }
}
