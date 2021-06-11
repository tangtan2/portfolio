import React from "react";
import Page from "../Shared/Page";
import Spacer from "../Shared/Spacer";
import Resume from "../files/resume.pdf";
import Profile from "../images/profile.png";
import { Link } from "react-router-dom";

export default class PageHome extends React.Component {
  render() {
    return (
      <Page>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Spacer type="column" size="xlarge" />
            <div
              style={{
                width: "300px",
                height: "300px",
                border: "1px solid black",
                boxShadow: "2px 2px 1px 1px",
                borderRadius: "5px",
              }}
            >
              <img
                src={Profile}
                alt="Profile"
                style={{ maxWidth: "300px", maxHeight: "300px" }}
              />
            </div>
            <Spacer type="column" size="xxlarge" />
            <div
              style={{
                height: "300px",
                display: "flex",
                flexDirection: "column",
                lineHeight: "50px",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
                fontSize: "20pt",
                fontWeight: "bold",
                color: "#7FB3D5",
              }}
            >
              Hi! I'm an optimization consultant, software developer, data
              storyteller, and engineer who loves trying to solve difficult
              problems.
            </div>
            <Spacer type="column" size="xlarge" />
          </div>
          <Spacer type="row" size="xxlarge" />
          <div>
            I currently work as a consultant and developer, delivering custom
            software solutions to Fortune 500 clients globally to help optimize
            their processes and increase profit. I love combining data, theory,
            and expertise to develop robust solutions for tough, multi-layered
            problems.
          </div>
          <Spacer type="row" size="large" />
          <div>
            I also recently completed my MASc degree at the{" "}
            <a href="https://tidel.mie.utoronto.ca/">
              Toronto Intelligent Decision Engineering Laboratory (TIDEL)
            </a>{" "}
            under the supervison of{" "}
            <a href="https://www.mie.utoronto.ca/faculty_staff/beck/">
              Dr. Christopher Beck
            </a>
            , researching problem-solving techniques at the intersection of
            applied mathematics and artificial intelligence. You can view my
            full resume{" "}
            <a rel="noopener noreferrer" href={Resume} target="_blank">
              here
            </a>
            !
          </div>
          <Spacer type="row" size="large" />
          <div>
            I've featured two of my larger side projects on this website, a{" "}
            <Link to="/50-in-07">
              predictive analytics dashboard for the Maple Leafs
            </Link>{" "}
            and a{" "}
            <Link to="/order-up">
              live ordering system for manufacturing facilities
            </Link>
            . I also have some other projects on my{" "}
            <a href="https://github.com/tangtan2">GitHub</a> profile, including
            an{" "}
            <a href="https://github.com/tangtan2/emotion_detection">
              emotion detection model
            </a>{" "}
            using deep transfer learning and a{" "}
            <a href="https://github.com/tangtan2/bike_share_rebalancing">
              bike share rebalancing analysis
            </a>{" "}
            using machine learning and Apache Spark.
          </div>
          <Spacer type="row" size="xxlarge" />
          <div
            style={{
              fontSize: "20pt",
              height: "50px",
              textAlign: "center",
              width: "300px",
              lineHeight: "50px",
              backgroundColor: "#7FB3D5",
              borderRadius: "10px",
              color: "white",
            }}
          >
            TECHNICAL SKILLS
          </div>
          <Spacer type="row" size="xlarge" />
          <div>
            <b>Languages:</b> Python, Java, C#, JavaScript/TypeScript, C++,
            MATLAB, Scala
          </div>
          <div>
            <b>Machine Learning:</b> scikit-learn, keras, Spark ML, Linear
            Algebra, Calculus, Statistics
          </div>
          <div>
            <b>Optimization Tools:</b> CPLEX, Gurobi, OR-Tools, FICO XPRESS
          </div>
          <div>
            <b>Development:</b> React, NodeJS, Angular, .NET Core/Framework,
            SignalR, Flask, AWS EC2, AWS RDS, AWS S3, Maven
          </div>
          <div>
            <b>Miscellaneous:</b> SQL, Git/GitHub, jupyter, seaborn/matplotlib,
            Unix/Linux
          </div>
          <Spacer type="row" size="xxlarge" />
          <div
            style={{
              fontSize: "20pt",
              height: "50px",
              textAlign: "center",
              width: "300px",
              lineHeight: "50px",
              backgroundColor: "#7FB3D5",
              borderRadius: "10px",
              color: "white",
            }}
          >
            EDUCATION
          </div>
          <Spacer type="row" size="xlarge" />
          <div>
            <b>Masters of Applied Science (2018 to 2020)</b> from the University
            of Toronto (Research Area: Optimization/Applied Mathematics)
          </div>
          <div>
            <b>Bachelors of Applied Science (2013 to 2018)</b> from the
            University of Waterloo
          </div>
        </div>
      </Page>
    );
  }
}
