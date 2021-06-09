import React from "react";
import Page from "../Shared/Page";
import Spacer from "../Shared/Spacer";

export default class Page50In07 extends React.Component {
  render() {
    return (
      <Page>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              borderBottom: "1px solid lightgrey",
            }}
          >
            50 in '07: Predictive Analytics in the NHL
          </div>
          <Spacer type="row" size="medium" />
          <div>
            Take a look at the application{" "}
            <a href="https://github.com/tangtan2/50_in_07">here</a>!
          </div>
          <Spacer type="row" size="xxlarge" />
          <div>TBD</div>
        </div>
      </Page>
    );
  }
}
