import React from "react";
import Page from "../Shared/Page";
import ConferencePaper from "../files/conference_paper.pdf";
import Thesis from "../files/thesis.pdf";
import Spacer from "../Shared/Spacer";

export default class PageResearch extends React.Component {
  render() {
    return (
      <Page>
        <Spacer type="row" size="xxlarge" />
        <div>
          My MASc research was mainly focused on solving a complex scheduling
          problem for the aerospace industry using techniques from applied
          mathematics, computer science, and artificial intelligence. I
          completed my research under the supervision of Dr. Christopher Beck
          and with the industrial support of Visual8. You can view my complete
          thesis{" "}
          <a rel="noopener noreferrer" href={Thesis} target="_blank">
            here
          </a>
          !
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
