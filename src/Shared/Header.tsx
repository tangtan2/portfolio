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
        alignItems: "center",
      }}
    >
      <div
        className="menu-item"
        style={{
          marginRight: "15px",
        }}
        onClick={() => {
          history.push("/");
        }}
      >
        ABOUT ME
      </div>
      <Spacer type="column" size="large" />
      <div
        className="menu-item"
        style={{
          marginRight: "15px",
        }}
        onClick={() => {
          history.push("/50-in-07");
        }}
      >
        50 IN '07: PREDICTIVE SPORTS ANALYTICS
      </div>
      <Spacer type="column" size="large" />
      <div
        className="menu-item"
        style={{
          marginRight: "15px",
        }}
        onClick={() => {
          history.push("/order-up");
        }}
      >
        ORDERUP!: LIVE ORDERING SYSTEM
      </div>
      <Spacer type="column" size="large" />
      <div
        className="menu-item"
        style={{
          marginRight: "40px",
        }}
        onClick={() => {
          history.push("/research");
        }}
      >
        RESEARCH AND PUBLICATIONS
      </div>
    </div>
  );
};

export default class Header extends React.Component {
  render() {
    return (
      <div
        style={{
          height: "100px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "30px",
            marginLeft: "40px",
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
