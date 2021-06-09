import React from "react";
import Page from "../Shared/Page";
import ConferencePaper from "../files/conference_paper.pdf";
import Thesis from "../files/thesis.pdf";
import Spacer from "../Shared/Spacer";

export default class PageResearch extends React.Component {
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
            Research and Publications
          </div>
        </div>
        <Spacer type="row" size="xxlarge" />
        <div
          style={{
            borderRadius: "10px",
            border: "1px solid lightgrey",
            boxShadow: "2px 2px 1px 1px lightgrey",
            padding: "20px",
            backgroundColor: "white",
            width: "950px",
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
            I have experience working with linear/mixed integer programming,
            constraint programming, stochastic simulation, constrained
            clustering, metaheuristics, experimental design, and advanced
            planning/scheduling. You can view the Java code that accompanies my
            thesis{" "}
            <a href="https://github.com/tangtan2/scheduling_composites_manufacturing">
              here!
            </a>
            .
          </div>
        </div>
        <Spacer type="row" size="xxlarge" />
        <div>
          My MASc research was mainly focused on solving a complex scheduling
          problem for the aerospace industry using techniques from applied
          mathematics, computer science, and artificial intelligence. I
          completed my research under the supervision of Dr. Christopher Beck
          and with the industrial support of Visual8. You can take a look at my
          thesis{" "}
          <a rel="noopener noreferrer" href={Thesis} target="_blank">
            here
          </a>
          . (But be warned, it's 120 pages long!)
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
          PUBLICATIONS
        </div>
        <div
          style={{
            paddingTop: "5px",
            borderBottom: "1px solid #7FB3D5",
          }}
        />
        <Spacer type="row" size="xlarge" />
        <div>
          <a rel="noopener noreferrer" href={ConferencePaper} target="_blank">
            <b>CP and Hybrid Models for Two-Stage Batching and Scheduling.</b>{" "}
          </a>
          Tang, T. and Beck, J.C. In{" "}
          <i>
            Proceedings of the International Conference on the Integration of
            Constraint Programming, Artificial Intelligence, and Operations
            Research (CPAIOR2020)
          </i>
          , pages 431-446, 2020. Springer.
        </div>
        <Spacer type="row" size="xlarge" />
        <div>
          <b>Batching and Scheduling for Composites Manufacturing.</b> Tang, T.
          and Beck, J.C. <i>Journal of Intelligent Manufacturing</i>, Under
          Review.
        </div>
      </Page>
    );
  }
}
