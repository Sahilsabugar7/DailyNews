import React, { Component } from 'react';
import TechNewsItem from './TechNewsItem';

export class TechNews extends Component {
    constructor() {
        super();
        this.state = {
          articles: [],
          page: 1,
          loading: false,
        };
      }
    
      async componentDidMount() {
        let url =
          "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e5192c212d804056a27733f47a4650b8"
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles });
      }
      handleprv = async () => {
        console.log("previous");
    
        let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e5192c212d804056a27733f47a4650b8
        &page=${
          this.state.page - 1
        }`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
          page: this.state.page - 1,
          articles: parseData.articles,
        });
      };
      handlenext = async () => {
        console.log("next");
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
        } else {
          let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e5192c212d804056a27733f47a4650b8
          &page=${
            this.state.page + 1
          }&pageSize=20`;
          let data = await fetch(url);
          let parseData = await data.json();
          this.setState({
            page: this.state.page + 1,
            articles: parseData.articles,
          });
        }
      };
    
      render() {
        return (
          <div className="container my -3">
            <h1 style={{ color: "darkslateblue" }}>
              <center>Top headlines from TechCrunch right now</center>
            </h1>
            <div className="row my-5">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-3 my-2" key={element.url}>
                    <TechNewsItem
                      title={element.title ? element.title : ""}
                      description={element.description ? element.description : ""}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
            </div>
            <div className="container d-flex justify-content-between">
              <button
                disabled={this.state.page <= 1}
                className="btn btn-dark"
                onClick={this.handleprv}
              >
                Previous
              </button>
              <button className="btn btn-dark" onClick={this.handlenext}>
                Next
              </button>
            </div>
          </div>
        );
      }
}

export default TechNews;
