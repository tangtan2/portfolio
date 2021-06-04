import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import PageHome from "./Pages/PageHome";
import Page50In07 from "./Pages/Page50In07";
import PageResearch from "./Pages/PageResearch";
import PageOrderUp from "./Pages/PageOrderUp";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route
          path="/"
          render={() => {
            return <Redirect to="/about-me" />;
          }}
        />
        <Route exact path="/about-me" component={PageHome} />
        <Route exact path="/50-in-07" component={Page50In07} />
        <Route exact path="/order-up" component={PageOrderUp} />
        <Route exact path="/research" component={PageResearch} />
      </BrowserRouter>
    );
  }
}
