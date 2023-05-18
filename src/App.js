import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";

export default class App extends Component {

  pageNo=10;
  render() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={<News key={'genral'} pagesize={this.pageNo} contry={"in"} category={"general"} />}
          />
          <Route
            exact
            path="/business"
            element={<News key={'business'}pagesize={this.pageNo}  contry={"in"} category={"business"} />}
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News key={'entertainment'}pagesize={this.pageNo}  contry={"in"} category={"entertainment"} />
            }
          />
          <Route
            exact
            path="/helth"
            element={<News key={'health'}pagesize={this.pageNo}  contry={"in"} category={"health"} />}
          />
          <Route
            exact
            path="/science"
            element={<News key={'science'}pagesize={this.pageNo}  contry={"in"} category={"science"} />}
          />
          <Route
            exact
            path="/sports"
            element={<News key={'sports'}pagesize={this.pageNo}  contry={"in"} category={"sports"} />}
          />
          <Route
            exact
            path="/technology"
            element={
              <News pagesize={this.pageNo}  key={'technology'} contry={"in"} category={"technology"} />
            }
          />
        </Routes>
      </div>
    );
  }
}
