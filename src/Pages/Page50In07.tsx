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
          <Spacer type="row" size="xxlarge" />
          <div
            style={{
              borderRadius: "10px",
              border: "1px solid lightgrey",
              boxShadow: "2px 2px 1px 1px lightgrey",
              padding: "20px",
              backgroundColor: "white",
              width: "90%",
              fontStyle: "italic",
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                borderBottom: "1px solid lightgrey",
              }}
            >
              Skill Summary
            </div>
            <Spacer type="row" size="medium" />
            <div>
              The backend for this application was developed using Python,
              scikit-learn machine learning models, and Flask. It is hosted on
              an AWS EC2 instance and runs on a Gunicorn server behind an NGINX
              reverse proxy. The backend connects to a PostgreSQL database
              hosted on AWS RDS. The frontend is a single-page application
              developed in React and hosted on AWS S3.
            </div>
          </div>
          <Spacer type="row" size="xxlarge" />
          <div>
            Go to the website <a href="https://50in0seven.ca">50in0seven.ca</a>{" "}
            to test out some predictive models for goal prediction. The website
            includes some background on the project and its motivation, an
            analysis of several aspects of game/team data using Tableau, and a
            demo where you can try to make a prediction yourself!
          </div>
        </div>
      </Page>
    );
  }
}
