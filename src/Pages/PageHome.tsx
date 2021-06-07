import React from "react";
import Page from "../Shared/Page";
import Spacer from "../Shared/Spacer";
import { ReactComponent as GithubLogo } from "../images/github.svg";
import EmailLogo from "../images/email.png";
import LinkedInLogo from "../images/linkedin.png";
import CV from "../files/conference_paper.pdf";

export default class PageHome extends React.Component {
  render() {
    return (
      <Page>
        <Spacer type="row" size="large" />
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
              }}
            >
              image placeholder
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
            I currently deliver custom software solutions to Fortune 500 clients
            globally to help them optimize their processes and increase
            production. I love combining data, theory, and expertise to develop
            robust solutions for tough, multi-layered problems.
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
            full CV{" "}
            <a rel="noopener noreferrer" href={CV} target="_blank">
              here
            </a>
            !
          </div>
          <Spacer type="row" size="large" />
          <div>
            Click through this website to learn more about my side projects and
            research/publications!
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
          <div
            style={{
              paddingTop: "5px",
              borderBottom: "1px solid #7FB3D5",
            }}
          />
          <Spacer type="row" size="xlarge" />
          <div>
            <b>Languages:</b> Python, Java, C#, JavaScript/TypeScript, C++,
            MATLAB
          </div>
          <div>
            <b>Machine Learning:</b> scikit-learn, keras, Spark ML
          </div>
          <div>
            <b>Optimization:</b> CPLEX, Gurobi, OR-Tools, FICO XPRESS
          </div>
          <div>
            <b>Development:</b> React, NodeJS, Angular, .NET Core/Framework,
            SignalR, Flask
          </div>
          <div>
            <b>Miscellaneous:</b> SQL, Git/GitHub, jupyter, seaborn/matplotlib
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
          <div
            style={{
              paddingTop: "5px",
              borderBottom: "1px solid #7FB3D5",
            }}
          />
          <Spacer type="row" size="xlarge" />
          <div>
            <b>Masters of Applied Science (2018 to 2020)</b> from the University
            of Toronto (Research Area: Optimization/Applied Mathematics)
          </div>
          <div>
            <b>Bachelors of Applied Science (2013 to 2018)</b> from the
            University of Waterloo
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
            CONTACT ME
          </div>
          <div
            style={{
              paddingTop: "5px",
              borderBottom: "1px solid #7FB3D5",
            }}
          />
          <Spacer type="row" size="xlarge" />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "50px",
              alignItems: "center",
            }}
          >
            <img alt="Email Logo" width="40px" height="35px" src={EmailLogo} />
            <Spacer type="column" size="large" />
            <a href="mailto:tanya.tang56@gmail.com">tanya.tang56@gmail.com</a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "50px",
              alignItems: "center",
            }}
          >
            <GithubLogo style={{ width: "40px", height: "40px" }} />
            <Spacer type="column" size="large" />
            <a href="https://github.com/tangtan2">tangtan2</a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "50px",
              alignItems: "center",
            }}
          >
            <img
              alt="LinkedIn Logo"
              width="40px"
              height="37px"
              src={LinkedInLogo}
            />
            <Spacer type="column" size="large" />
            <a href="https://www.linkedin.com/in/tanya-t-50801881/">
              Tanya Tang
            </a>
          </div>
        </div>
      </Page>
    );
  }
}
