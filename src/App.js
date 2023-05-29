import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {

  pageNo=12;
  apiKeys= process.env.REACT_APP_NEWS_API;
  // country='us';



  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      country: "us", // Initialize country state with a default value
    };
  }


  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  handleCountryChange = (countryCode) => {
    this.setState({ country :countryCode });
  };


 

  render() {
    return (
      <div>
        <NavBar onCountryChange={this.handleCountryChange} />
        <LoadingBar
        color='#004d66'
        progress={this.state.progress}
      />

        <Routes>
          <Route
            exact
            path="/"
            element={<News setProgress={this.setProgress}  apiKeys={this.apiKeys} key={'genral'} pagesize={this.pageNo} country={this.state.country} category={"general"} />}
          />
          <Route
            exact
            path="/business"
            element={<News setProgress={this.setProgress} apiKeys={this.apiKeys}key={'business'}pagesize={this.pageNo}  country={this.state.country} category={"business"} />}
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News setProgress={this.setProgress} apiKeys={this.apiKeys}key={'entertainment'}pagesize={this.pageNo}  country={this.state.country} category={"entertainment"} />
            }
          />
          <Route
            exact
            path="/helth"
            element={<News setProgress={this.setProgress} apiKeys={this.apiKeys}key={'health'}pagesize={this.pageNo}  country={this.state.country} category={"health"} />}
          />
          <Route
            exact
            path="/science"
            element={<News setProgress={this.setProgress} apiKeys={this.apiKeys}key={'science'}pagesize={this.pageNo}  country={this.state.country} category={"science"} />}
          />
          <Route
            exact
            path="/sports"
            element={<News setProgress={this.setProgress} apiKeys={this.apiKeys}key={'sports'}pagesize={this.pageNo}  country={this.state.country} category={"sports"} />}
          />
          <Route
            exact
            path="/technology"
            element={
              <News setProgress={this.setProgress} apiKeys={this.apiKeys}pagesize={this.pageNo}  key={'technology'} country={this.state.country} category={"technology"} />
            }
          />
        </Routes>


      </div>
    );
  }
}
